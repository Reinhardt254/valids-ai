import { useAuth } from "@/contexts/AuthContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Pencil, Trash } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { toast, Toaster } from "sonner";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  description: string;
  imageUrl: string;
  author: {
    name: string;
    email: string;
    id: string;
    profile: {
      avatarUrl: string;
    };
  };
}

export function DashboardBlogsAdmin() {
  const { id } = useParams();

  const { user } = useAuth();

  const { data: BlogPost } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/blogs");

      if (!response.ok) {
        toast.error("Failed to fetch blogs");
        throw new Error("Failed to fetch blogs");
      }

      toast.success("Blogs fetched successfully");
      const data = await response.json();
      console.log(data);
      return data;
    },
  });

  const handleDelete = (id: number) => {
    deleteBlog(id.toString());
  };

  const { mutate: deleteBlog, isPending } = useMutation({
    mutationFn: async (id: string) => {
      if(!user) {
        toast.error("User not authenticated");
        return;
      }
      
      const response = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }
      return response.json();
    },
    onError: () => {
      toast.error("Failed to delete blog");
    },
  });

  if (isPending) {
    toast.loading("Deleting blog...");
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {isPending && <Toaster />}
      <h1 className="pt-5 mb-10 text-4xl font-bold">Blog</h1>
      <Link
        to={`/dashboard/${id}/blogs/create`}
        className="px-4 py-2 mb-10 text-white bg-blue-500 rounded-md"
      >
        Create Blog
      </Link>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-4 pt-5 md:grid-cols-2 lg:grid-cols-3">
          {BlogPost?.map((post: BlogPost) => (
            <div
              key={post.id}
              className="flex flex-col items-start justify-start gap-1 p-5 bg-white rounded-lg shadow-md"
            >
              <div className="object-cover w-full h-56 mb-2 overflow-hidden rounded-md">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full transition-all rounded-lg hover:scale-125 duration-900"
                />
              </div>
              <p className="text-gray-500 text-md">{post.date}</p>
              <p className="text-lg font-semibold text-gray-600">
                {post.author.name}
              </p>
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500 line-clamp-3">
                {post.description}
              </p>
              <Link
                to={`/post/${post.id}`}
                className="font-semibold text-blue-500 text-md hover:text-blue-400"
              >
                Read More
              </Link>

              <div className="flex flex-row gap-5 pt-4">
                <Link
                  to={`/dashboard/${id}/blogs/edit/${post.id}`}
                  className="flex flex-row items-center gap-2 font-semibold text-blue-500 cursor-pointer text-md hover:text-blue-400"
                >
                  <span>
                    <Pencil />
                  </span>{" "}
                  Edit
                </Link>
                <div
                  onClick={() => handleDelete(post.id)}
                  className="flex flex-row items-center gap-2 font-semibold text-red-500 cursor-pointer text-md hover:text-red-400"
                >
                  <span>
                    <Trash />
                  </span>{" "}
                  Delete
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
