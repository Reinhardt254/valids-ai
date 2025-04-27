import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button"; 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { DownloadIcon } from "lucide-react";
import CSVTables from "@/components/CSVTables";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UploadedFile {
  id: string;
  filename: string;
  fileType: "IMAGE" | "VIDEO" | "CSV";
  originalName: string;
  createdAt: string;
}

const DashboardNewLead = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState("upload");

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();

      // Match the field name with what the server expects based on file type
      let endpoint = "";
      if (file.type.includes("image")) {
        formData.append("image", file);
        endpoint = "image";
      } else if (file.type.includes("video")) {
        formData.append("video", file);
        endpoint = "video";
      } else if (file.type === "text/csv") {
        formData.append("csv", file);
        endpoint = "csv";
      }

      const response = await fetch(
        `http://localhost:8000/api/upload/${endpoint}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message || "Failed to upload file");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success(`Successfully uploaded file`);
      setOpen(false);
      setFile(null);
      setActiveTab("tables");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "text/csv": [".csv"],
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
      "video/*": [".mp4", ".mov", ".avi"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const handleUpload = async () => {
    if (!file) return;
    uploadMutation.mutate(file);
  };

  const { data: files } = useQuery({
    queryKey: ["files"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/files", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch files");
      }
      return response.json();
    },
  });

  const validateFileMutation = useMutation({
    mutationFn: async (file: UploadedFile) => {
      const response = await fetch("http://localhost:8000/csv/import", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fileId: file.id, tableName: file.filename }),
      });

      if (!response.ok) {
        throw new Error("Failed to validate file");
      }
      return response.json();
    },
    onSuccess: () => {
      toast.success("File validated successfully");
      setActiveTab("tables");
    },
    onError: (error: Error) => {
      console.error(error);
      toast.error("Failed to validate file");
    },
  });

  return (
    <div className="container mx-0 py-8">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="mb-8">Hello {user?.name}, find your new leads here</p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
        <TabsList className="grid max-w-2xl w-auto grid-cols-2">
          <TabsTrigger className=" text-gray-200 mr-3" value="upload">Upload Files</TabsTrigger>
          <TabsTrigger className=" text-gray-200" value="tables">CSV Tables</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="mt-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Lead Source</h2>
            <p className="mb-6">Upload a CSV, image, video or PDF file</p>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>Upload File</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Upload File</DialogTitle>
                  <DialogDescription>
                    Drag and drop your file here or click to browse
                  </DialogDescription>
                </DialogHeader>

                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                    ${
                      isDragActive
                        ? "border-primary bg-primary/10"
                        : "border-gray-300"
                    }`}
                >
                  <input {...getInputProps()} />
                  {file ? (
                    <p className="text-sm">Selected file: {file.name}</p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      {isDragActive
                        ? "Drop the file here"
                        : "Drag & drop a file here, or click to select"}
                    </p>
                  )}
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  <Button
                    className="text-white"
                    variant="outline"
                    onClick={() => setOpen(false)}
                    disabled={uploadMutation.isPending}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleUpload}
                    disabled={!file || uploadMutation.isPending}
                  >
                    {uploadMutation.isPending ? "Uploading..." : "Upload"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Uploaded Files</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 box-border">
                {files?.map((file: UploadedFile) => (
                  <div key={file.id} className="border rounded-lg p-4 w-auto">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{file.filename}</p>
                        <p className="text-sm text-gray-500">
                          Type: {file.fileType}
                        </p>
                        <p className="text-sm text-gray-500">
                          Uploaded:{" "}
                          {new Date(file.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <a
                        href={`https://validleads.nyc3.digitaloceanspaces.com/${file.fileType.toLowerCase()}s/${
                          file.filename
                        }`}
                        download
                        className="text-primary hover:text-primary/80"
                      >
                        <DownloadIcon className="h-5 w-5" />
                      </a>

                      {file.fileType === "CSV" && (
                        <Button
                          onClick={() => validateFileMutation.mutate(file)}
                          disabled={validateFileMutation.isPending}
                        >
                          {validateFileMutation.isPending
                            ? "Validating..."
                            : "Validate"}
                        </Button>
                      )}
                    </div>

                    <div className="mt-4">
                      {file.fileType === "IMAGE" && (
                        <img
                          src={`https://validleads.nyc3.digitaloceanspaces.com/images/${file.filename}`}
                          alt={file.originalName}
                          className="w-full h-32 object-cover rounded"
                        />
                      )}
                      {file.fileType === "VIDEO" && (
                        <video
                          src={`https://validleads.nyc3.digitaloceanspaces.com/videos/${file.filename}`}
                          className="w-full h-32 object-cover rounded"
                          controls
                        />
                      )}
                      {file.fileType === "CSV" && (
                        <div className="text-sm text-gray-500 italic">
                          CSV file preview not available
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tables" className="mt-6">
          <CSVTables />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardNewLead;
