import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  imageUrl: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    email: string;
    id: string;
    profile: {
      avatarUrl: string;
    }
  }
}

export default function Post() {
  const { id } = useParams();

  const { data: post } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {

      const response = await fetch(`http://localhost:8000/blogs/${id}`)

      if (!response.ok) {
        toast.error("Failed to fetch post");
        throw new Error("Failed to fetch post");
      }
      
      const data = await response.json();
      console.log(data);
      return data;
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-[1000px] h-full rounded-md mb-2 flex flex-col gap-4">
        <h1 className="pt-5 text-2xl font-bold text-gray-700">{post?.title}</h1>

        <img
          src={post?.imageUrl}
          alt={post?.title}
          className="w-full h-[450px] object-cover rounded-md mb-1"
        />
 
        <div className="flex flex-row gap-2">
          <p className="font-semibold text-gray-700 text-md">{formatDate(post?.createdAt)}</p>
          <p className="font-semibold text-gray-700 text-md"><span className="text-black">By</span> {post?.author?.name}</p>
          <p className="font-semibold text-black text-md">{post?.category}</p>
        </div>

        <div className="flex flex-row gap-2">
           {post?.tags?.map((tag: string) => (
            <p className="px-6 py-2 text-xs font-semibold text-gray-700 bg-gray-200 cursor-pointer rounded-4xl">{tag}</p>
           ))}
        </div>

        <p className="text-sm text-gray-700">{post?.content}</p>
      </div>
    </div>
  );
}
