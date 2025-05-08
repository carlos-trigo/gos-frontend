import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./button";
import { paths } from "@/routes/paths";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: paths.home,
      },
    });
  };
  return <Button onClick={handleLogin}>Log in</Button>;
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
