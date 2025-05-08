import { Navigate } from "react-router";
import { JSX } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "@/components/custom/spinner";
import { paths } from "./paths";

export const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Spinner />;

  if (!isAuthenticated) {
    // user is not authenticated
    return <Navigate to={paths.landing} />;
  }
  return children;
};
