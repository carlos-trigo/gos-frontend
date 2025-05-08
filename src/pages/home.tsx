import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getOrCreateSkater } from "../service/api";
import { useNavigate } from "react-router";
import { paths } from "../routes/paths";
import { GridLayout } from "@/components/custom/layout/full-page";
import { Menu } from "@/components/custom/menu";
import { Header } from "@/components/custom/layout/header";
import { Spinner } from "@/components/custom/spinner";

export const Home = () => {
  const {
    user,
    isAuthenticated,
    isLoading: authIsLoading,
    getAccessTokenSilently,
    logout,
  } = useAuth0();
  const [token, setToken] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (authIsLoading) return;
    if (!isAuthenticated) navigate(paths.unauthorized);

    const getToken = async () => setToken(await getAccessTokenSilently());

    if (isAuthenticated && token === undefined) {
      getToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  if (authIsLoading) {
    return <Spinner />;
  }

  const handleGetOrCreateSkater = async () => {
    if (!user || !token) return;
    const result = getOrCreateSkater(user, token);
    console.info(result);
  };

  const menuItems = [
    {
      text: "profile",
      callback: () => handleGetOrCreateSkater(),
    },
    {
      text: "friends",
      callback: () => navigate(paths.friends),
    },
    {
      text: "landing",
      callback: () => navigate(paths.landing),
    },
    {
      text: "log out",
      callback: () => logout(),
    },
  ];

  return (
    <GridLayout
      header={<Header user={user} />}
      title="Home"
      content={<Menu items={menuItems} />}
    />
  );
};
