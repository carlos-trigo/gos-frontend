import { GridLayout } from "@/components/custom/layout/full-page";
import { useAuth0 } from "@auth0/auth0-react";
import { Unauthorized } from "./unauthorized";
import { useEffect, useState } from "react";
import { Skater } from "@/types/backend";
import { isSkaterArray } from "@/service/typeguard";
import { getAddFriendsData } from "@/service/api";
import { UserTable } from "@/components/custom/user/table/user-table";
import { friendTableColumns } from "@/components/custom/user/table/friends-table-columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/custom/layout/header";
import { Spinner } from "@/components/custom/spinner";
import { useNavigate } from "react-router";
import { paths } from "@/routes/paths";

export const Friends = () => {
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
    const getToken = async () => setToken(await getAccessTokenSilently());

    const getSkaters = async () => {
      if (token) {
        const result = await getAddFriendsData(token);
        if (isSkaterArray(result.allSkaters)) setAllSkaters(result.allSkaters);
      }
      console.warn("Cannot get users, no auth token present");
    };

    if (authIsLoading) {
      console.log("Waiting for auth to load");
    } else {
      if (!isAuthenticated) navigate(paths.unauthorized);
      if (isAuthenticated && !token) getToken();
      getSkaters();
    }
  }, [
    getAccessTokenSilently,
    allSkaters,
    navigate,
    isAuthenticated,
    token,
    user,
    authIsLoading,
  ]);

  if (authIsLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated || !token) return <Unauthorized />;

  const currentFriendsTable = (
    <UserTable
      users={allSkaters.filter(
        (skater) =>
          skater.friendRequestStatus === "approved" ||
          skater.friendRequestStatus === "pending"
      )}
      token={token}
      columns={friendTableColumns}
    />
  );

  const allSkatersTable = (
    <UserTable users={allSkaters} token={token} columns={friendTableColumns} />
  );

  return (
    <GridLayout
      header={<Header user={user} />}
      title="Friends"
      content={
        <div className="flex-col w-screen h-full justify-items-center align-center">
          <Tabs defaultValue="friends" className="w-[385px] md:w-[550px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="friends">Friends</TabsTrigger>
              <TabsTrigger value="add-people">Add people</TabsTrigger>
            </TabsList>
            <TabsContent value="friends">
              <div className="flex w-full h-100 items-center justify-center">
                {currentFriendsTable}
              </div>{" "}
            </TabsContent>
            <TabsContent value="add-people">
              <div className="flex w-full h-100 items-center justify-center">
                {allSkatersTable}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      }
    />
  );
};
