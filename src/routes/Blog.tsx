import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

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
    }
  }
}
  
export default function Blog() {

  const { data: blogs } = useQuery({
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

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Toaster />   
      <h1 className="pt-5 text-4xl font-bold">Blog</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-4 pt-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs?.map((post: BlogPost) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
