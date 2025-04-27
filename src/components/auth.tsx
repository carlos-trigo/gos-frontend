import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./button";
import { paths } from "../routes/paths";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button onClick={() => loginWithRedirect()}>Log in</Button>;
};

export const Logout = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() => logout({ logoutParams: { returnTo: paths.landing } })}
    >
      Log out
    </Button>
  );
};
