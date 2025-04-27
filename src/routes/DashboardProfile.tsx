import { useAuth } from "../contexts/AuthContext";

export function DashboardProfile() {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Account Settings</h1>
      <div className="mt-4">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              Profile Information
            </h2>
            <p className="text-gray-600">Name: {user?.name}</p>
            <p className="text-gray-600">Email: {user?.email}</p>
          </div>
          {/* Add more settings sections as needed */}
        </div>
      </div>
    </div>
  );
}

