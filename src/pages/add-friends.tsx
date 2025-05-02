import { BigTitle } from "@/components/custom/text";
import { useAuth0 } from "@auth0/auth0-react";
import { Unauthorized } from "./unauthorized";
import { Button } from "@/components/custom/button";
import { useEffect, useState } from "react";
import { getAddFriendsData } from "../service/api";
import { useNavigate } from "react-router";
import { paths } from "../routes/paths";
import { Skater } from "../types/backend";
import { isSkaterArray } from "../service/typeguard";
import { SkatersTable } from "@/components/custom/user/user-table";
import { FullPage } from "@/components/custom/layout/full-page";
import { UserDropdownMenu } from "@/components/custom/user/user-dropdown-menu";

export const AddFriends = () => {
  const {
    user,
    isAuthenticated,
    isLoading: authIsLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const [token, setToken] = useState<string>();
  const [allSkaters, setAllSkaters] = useState<Skater[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () =>
      token === undefined && setToken(await getAccessTokenSilently());
    const getSkaters = async () => {
      if (!user || !token) return;
      const result = await getAddFriendsData(user.email!, token);
      console.info(result);
      if (isSkaterArray(result)) setAllSkaters(result);
    };
    getToken();
    getSkaters();
  }, [getAccessTokenSilently, token, user]);

  if (authIsLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) return <Unauthorized />;

  return (
    <FullPage>
      <div className="flex-col justify-items-center">
        <div className="flex-1 pl-8 pt-8 justify-self-start">
          <UserDropdownMenu user={user} />
        </div>
        <div className="flex-none">
          <BigTitle>game of skate</BigTitle>
        </div>
        <div className="w-100 flex-none">
          <SkatersTable skaters={allSkaters} />
        </div>
        <div className="flex-none">
          <Button onClick={() => navigate(paths.friends)}>
            back to friends
          </Button>
        </div>
      </div>
    </FullPage>
  );
};
