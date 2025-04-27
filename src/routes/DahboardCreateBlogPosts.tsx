import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogPostSchema, BlogPostFormData } from "../lib/schemas/blogPost";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { Tiptap } from "../components/editor/Tiptap";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

interface BlogPost {
  title: string;
  content: string;
  category?: string;
  tags: string[];
  authorId: string;
  imageUrl?: string;
}

export function DahboardCreateBlogPosts() {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      content: "",
    },
  });

  const { user } = useAuth();

  const onSubmit = (data: BlogPostFormData) => {
    if (!user?.id) {
      toast.error("User not authenticated");
      return;
    }

    const blogData: BlogPost = {
      title: data.title,
      content: data.content,
      category: data.category,
      tags: data.tags,
      authorId: user.id,
      imageUrl: data.image,
    };

    createBlog(blogData);
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setValue("tags", [...tags, newTag]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    setValue("tags", newTags);
  };

  const { mutate: createBlog, isPending } = useMutation({
    mutationFn: async (data: BlogPost) => {
      try {
        setSubmitted(true);
        const response = await fetch("http://localhost:8000/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.token}`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to create blog post");
        }

        const result = await response.json();
        toast.success("Blog post created successfully");
        return result;
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to create blog post"
        );
        throw error;
      } finally {
        setSubmitted(false);
      }
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  return (
    <div className="container p-4 mx-auto">
      <Toaster />
      <h1 className="mb-6 text-2xl font-bold">Create New Blog Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            {...register("title")}
            className={errors.title ? "border-red-500" : ""}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Content</Label>
          <Tiptap
            content={watch("content")}
            onChange={(content) => setValue("content", content)}
          />
          {errors.content && (
            <p className="text-sm text-red-500">{errors.content.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            {...register("category")}
            className={errors.category ? "border-red-500" : ""}
          />
          {errors.category && (
            <p className="text-sm text-red-500">{errors.category.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Tags</Label>
          <div className="flex gap-2">
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add a tag"
            />
            <Button type="button" onClick={addTag}>
              Add Tag
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {errors.tags && (
            <p className="text-sm text-red-500">{errors.tags.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Image URL (optional)</Label>
          <Input
            id="image"
            {...register("image")}
            className={errors.image ? "border-red-500" : ""}
          />
          {errors.image && (
            <p className="text-sm text-red-500">{errors.image.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isPending || submitted}
        >
          {isPending || submitted ? "Submitting..." : "Create Blog Post"}
        </Button>
      </form>
    </div>
  );
}
