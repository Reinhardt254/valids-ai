import { useAuth } from "../contexts/AuthContext";

const API_BASE_URL = "http://localhost:8000";

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export const useApi = () => {
  const { token } = useAuth();

  const getHeaders = (includeAuth = true) => {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (includeAuth && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
  };

  const get = async <T>(
    endpoint: string,
    includeAuth = true
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "GET",
        headers: getHeaders(includeAuth),
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.error || "Request failed" };
      }

      return { data };
    } catch (error) {
      console.error("API GET error:", error);
      return { error: "Network error" };
    }
  };

  const post = async <T>(
    endpoint: string,
    body: Record<string, unknown>,
    includeAuth = true
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: getHeaders(includeAuth),
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.error || "Request failed" };
      }

      return { data };
    } catch (error) {
      console.error("API POST error:", error);
      return { error: "Network error" };
    }
  };

  const put = async <T>(
    endpoint: string,
    body: Record<string, unknown>,
    includeAuth = true
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "PUT",
        headers: getHeaders(includeAuth),
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.error || "Request failed" };
      }

      return { data };
    } catch (error) {
      console.error("API PUT error:", error);
      return { error: "Network error" };
    }
  };

  const del = async <T>(
    endpoint: string,
    includeAuth = true
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: getHeaders(includeAuth),
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.error || "Request failed" };
      }

      return { data };
    } catch (error) {
      console.error("API DELETE error:", error);
      return { error: "Network error" };
    }
  };

  return {
    get,
    post,
    put,
    del,
  };
};
