import { FullPage } from "@/components/custom/layout/full-page";
import { BigTitle } from "@/components/custom/text";
import { useAuth0 } from "@auth0/auth0-react";
import { Unauthorized } from "./unauthorized";
import { useEffect, useState } from "react";
import { getFriends } from "../service/api";
import { useNavigate } from "react-router";
import { paths } from "../routes/paths";
import { Menu } from "@/components/custom/menu";
import { UserDropdownMenu } from "@/components/custom/user/user-dropdown-menu";

export const Friends = () => {
  const {
    user,
    isAuthenticated,
    isLoading: authIsLoading,
    getAccessTokenSilently,
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

  const handleGetFriends = async () => {
    if (!user?.email || !token) return;
    const result = getFriends(user.email, token);
    console.info(result);
  };

  const menuItems = [
    {
      text: "add-friends",
      callback: () => navigate(paths.addFriends),
    },
    {
      text: "friends",
      callback: () => handleGetFriends(),
    },
    {
      text: "back",
      callback: () => navigate(paths.home),
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
        <div className="flex-none">
          <Menu items={menuItems} />
        </div>
      </div>
    </FullPage>
  );
};
