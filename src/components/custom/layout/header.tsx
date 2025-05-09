import { User } from "@auth0/auth0-react";
import { BigTitle } from "../text";
import { UserDropdownMenu } from "../user/user-dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = ({ user }: { user?: User }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-screen grid grid-cols-1 gap-y-0 gap-x-0">
        <div className="z-2 w-screen flex items-center justify-center mt-6 md:mt-10">
          <UserDropdownMenu user={user} />
        </div>
        <div className="z-1 w-screen flex items-center justify-center">
          <BigTitle>game of skate</BigTitle>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-full grid grid-rows-1 auto-cols-[5vw] gap-y-0 gap-x-0">
      <div className="z-2 col-span-3 h-full flex items-center justify-center mt-12 md:mt-16">
        <UserDropdownMenu user={user} />
      </div>
      <div className="z-1 col-span-20 h-full flex items-center justify-center -mt-6">
        <BigTitle>game of skate</BigTitle>
      </div>
    </div>
  );
};
