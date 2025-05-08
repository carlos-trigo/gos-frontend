import { useAuth0 } from "@auth0/auth0-react";
import { Unauthorized } from "./unauthorized";
import { useEffect, useState } from "react";
import { getOrCreateSkater } from "../service/api";
import { useNavigate } from "react-router";
import { paths } from "../routes/paths";
import { Layout } from "@/components/custom/layout/full-page";
import { Menu } from "@/components/custom/menu";
import { Header } from "@/components/custom/layout/header";

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
    const getToken = async () => setToken(await getAccessTokenSilently());
    if (isAuthenticated) {
      getToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  if (authIsLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) return <Unauthorized />;

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
    <Layout
      header={<Header user={user} />}
      title="Home"
      content={<Menu items={menuItems} />}
    />
  );
};
