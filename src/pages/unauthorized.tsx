import { FullPage } from "@/components/custom/layout/full-page";
import { Login } from "@/components/custom/auth";
import { BigTitle, Text } from "@/components/custom/text";

export const Unauthorized = () => {
  return (
    <FullPage>
      <div className="flex-col justify-items-center">
        <BigTitle>game of skate</BigTitle>
        <Text>You must login to access this page</Text>
        <Login />
      </div>
    </FullPage>
  );
};
