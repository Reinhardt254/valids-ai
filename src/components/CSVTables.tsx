import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { DownloadIcon, TrashIcon } from "lucide-react";
import { toast } from "sonner";
import { Column, Row, TableData, CSVTable } from "@/types/csv";

const CSVTables = () => {
  const { user } = useAuth();
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const queryClient = useQueryClient();

  // Fetch all tables
  const { data: tables, isLoading: isLoadingTables } = useQuery({
    queryKey: ["tables"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/csv/tables", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch tables");
      }
      return response.json() as Promise<CSVTable[]>;
    },
  });

  // Fetch table data when a table is selected
  const { data: tableData, isLoading: isLoadingTableData } = useQuery({
    queryKey: ["tableData", selectedTable, currentPage, pageSize],
    queryFn: async () => {
      if (!selectedTable) return null;
      const response = await fetch(
        "http://localhost:8000/csv/tables/a36000e7-f826-4188-85a9-cfd3f3f0b2e9/data",
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch table data");
      }
      return response.json() as Promise<TableData>;
    },
    enabled: !!selectedTable,
  });

  // Delete table mutation
  const deleteTableMutation = useMutation({
    mutationFn: async (tableId: string) => {
      const response = await fetch(
        `http://localhost:8000/csv/tables/${tableId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete table");
      }
      return response.json();
    },
    onSuccess: () => {
      toast.success("Table deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["tables"] });
      if (selectedTable) {
        setSelectedTable(null);
      }
    },
    onError: (error: Error) => {
      toast.error(`Failed to delete table: ${error.message}`);
    },
  });

  // Download table as CSV mutation
  const downloadTableMutation = useMutation({
    mutationFn: async (tableId: string) => {
      const response = await fetch(
        `http://localhost:8000/csv/tables/${tableId}/download`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to download table");
      }
      return response.blob();
    },
    onSuccess: (blob, tableId) => {
      const table = tables?.find((t) => t.id === tableId);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${table?.name || "table"}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success("Table downloaded successfully");
    },
    onError: (error: Error) => {
      toast.error(`Failed to download table: ${error.message}`);
    },
  });

  const handleTableSelect = (tableId: string) => {
    setSelectedTable(tableId);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDeleteTable = (tableId: string) => {
    if (confirm("Are you sure you want to delete this table?")) {
      deleteTableMutation.mutate(tableId);
    }
  };

  const handleDownloadTable = (tableId: string) => {
    downloadTableMutation.mutate(tableId);
  };

  if (isLoadingTables) {
    return <div>Loading tables...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">CSV Tables</h2>

      {tables && tables.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tables.map((table) => (
            <Card
              key={table.id}
              className={`cursor-pointer transition-all ${
                selectedTable === table.id ? "border-primary" : ""
              }`}
              onClick={() => handleTableSelect(table.id)}
            >
              <CardHeader>
                <CardTitle>{table.name}</CardTitle>
                <CardDescription>{table.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      {table.rowCount} rows
                    </p>
                    <p className="text-sm text-gray-500">
                      Created: {new Date(table.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadTable(table.id);
                      }}
                      disabled={downloadTableMutation.isPending}
                    >
                      <DownloadIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTable(table.id);
                      }}
                      disabled={deleteTableMutation.isPending}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">
            No tables found. Upload a CSV file to create a table.
          </p>
        </div>
      )}

      {selectedTable && tableData && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">{tableData.table.name}</h3>

          {isLoadingTableData ? (
            <div>Loading table data...</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {tableData.columns.map((column) => (
                        <TableHead key={column?.id}>{column?.name}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.rows.map((row) => (
                      <TableRow key={row.id}>
                        {tableData.columns.map((column) => (
                          <TableCell key={`${row.id}-${column.id}`}>
                            {row.data[column.name] || ""}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                        aria-disabled={currentPage === 1}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>

                    {Array.from(
                      { length: tableData.pagination.totalPages },
                      (_, i) => i + 1
                    )
                      .filter(
                        (page) =>
                          page === 1 ||
                          page === tableData.pagination.totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                      )
                      .map((page, index, array) => {
                        // Add ellipsis if there's a gap
                        if (index > 0 && page - array[index - 1] > 1) {
                          return (
                            <PaginationItem key={`ellipsis-${page}`}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }

                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => handlePageChange(page)}
                              isActive={currentPage === page}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                        aria-disabled={
                          currentPage === tableData.pagination.totalPages
                        }
                        className={
                          currentPage === tableData.pagination.totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CSVTables;
