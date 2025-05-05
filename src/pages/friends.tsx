import { FullPage } from "@/components/custom/layout/full-page";
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

export const Friends = () => {
  const {
    user,
    isAuthenticated,
    isLoading: authIsLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const [token, setToken] = useState<string>();
  const [allSkaters, setAllSkaters] = useState<Skater[]>([]);

  useEffect(() => {
    const getToken = async () =>
      token === undefined && setToken(await getAccessTokenSilently());
    const getSkaters = async () => {
      if (!user || !token) return;
      const result = await getAddFriendsData(token);
      console.info(result);
      if (isSkaterArray(result.allSkaters)) setAllSkaters(result.allSkaters);
    };
    getToken();
    getSkaters();
  }, [getAccessTokenSilently, token, user]);
  if (authIsLoading) {
    return <div>Loading ...</div>;
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
    <FullPage>
      <div className="w-full flex-col justify-items-center">
        <Header user={user} />

        <Tabs defaultValue="friends" className="w-[400px]">
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
    </FullPage>
  );
};
