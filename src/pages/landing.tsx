import { FullPage } from "../components/layout/full-page";
import { Login, Logout } from "../components/auth";
import { BigTitle } from "../components/text";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import { paths } from "../routes/paths";
import { Button } from "../components/button";

export const Landing = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    console.info("User is logged in, redirecting to " + paths.home);
    navigate(paths.home);
  }

  console.log(user);
  return (
    <FullPage>
      <BigTitle style={{ marginTop: "30vh" }}>game of skate</BigTitle>
      {isAuthenticated ? <Logout /> : <Login />}
      <Button onClick={() => navigate(paths.home)}>home</Button>
    </FullPage>
  );
};
