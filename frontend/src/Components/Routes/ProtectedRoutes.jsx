import React from "react";
import { Navigate} from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  return user ? children : <Navigate to='/login' />
}

export default ProtectedRoutes;
