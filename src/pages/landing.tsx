import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import { paths } from "@/routes/paths";
import { FullPage } from "@/components/custom/layout/full-page";
import { BigTitle } from "@/components/custom/text";
import { Button } from "@/components/custom/button";
import { Login, Logout } from "@/components/custom/auth";
import { useEffect } from "react";
import { Spinner } from "@/components/custom/spinner";

export const Landing = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.info("User is logged in, redirecting to " + paths.home);
      navigate(paths.home);
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <FullPage>
      <div className="flex-col justify-items-center flex-nowrap">
        <BigTitle>game of skate</BigTitle>
        <div>{isAuthenticated ? <Logout /> : <Login />}</div>
        <div>
          <Button onClick={() => navigate(paths.home)}>home</Button>
        </div>
      </div>
    </FullPage>
  );
};
