import { useAuth0 } from "@auth0/auth0-react";
import { Unauthorized } from "./unauthorized";
import { useEffect, useState } from "react";
import { getOrCreateSkater } from "../service/api";
import { useNavigate } from "react-router";
import { paths } from "../routes/paths";
import { FullPage } from "@/components/custom/layout/full-page";
import { BigTitle } from "@/components/custom/text";
import { Menu } from "@/components/custom/menu";
import { UserDropdownMenu } from "@/components/custom/user/user-dropdown-menu";

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
    getToken();
  }, [getAccessTokenSilently]);

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
    <FullPage>
      <div className="flex-col justify-items-center">
        <div className="flex-1 pl-8 pt-8 justify-self-start">
          <UserDropdownMenu user={user} />
        </div>

        <div className="flex-none">
          <BigTitle>game of skate</BigTitle>
        </div>
        <Menu items={menuItems} />
      </div>
    </FullPage>
  );
};
