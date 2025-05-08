import { Login } from "@/components/custom/auth";
import { GridLayout } from "@/components/custom/layout/full-page";
import { Header } from "@/components/custom/layout/header";
import { Text } from "@/components/custom/text";

export const Unauthorized = () => {
  return (
    <GridLayout
      header={<Header />}
      content={
        <>
          <Text>You must login to access this page</Text>
          <Login />
        </>
      }
    />
  );
};
