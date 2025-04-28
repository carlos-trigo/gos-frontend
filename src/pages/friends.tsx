import { FullPage } from "../components/layout/full-page";
import { Logout } from "../components/auth";
import { BigTitle } from "../components/text";
import { useAuth0 } from "@auth0/auth0-react";
import { Unauthorized } from "./unauthorized";
import { Button } from "../components/button";
import { FlexColCentered } from "../components/layout/containers";
import { UserCard } from "../components/user";
import { useEffect, useState } from "react";
import { getAllSkaters, getFriends } from "../service/api";
import { useNavigate } from "react-router";
import { paths } from "../routes/paths";

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

  const handleGetAllSkaters = async () => {
    if (!user || !token) return;
    const result = getAllSkaters(token);
    console.info(result);
  };

  return (
    <FullPage>
      <FlexColCentered padding="50px 0px">
        <UserCard user={user} />
        <BigTitle>game of skate</BigTitle>
        <Button onClick={handleGetFriends}>friends</Button>
        <Button onClick={handleGetAllSkaters}>skaters</Button>
        <Button onClick={() => navigate(paths.landing)}>landing</Button>
        <Logout />
      </FlexColCentered>
    </FullPage>
  );
};
