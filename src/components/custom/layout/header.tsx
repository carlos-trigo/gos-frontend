import { User } from "@auth0/auth0-react";
import { BigTitle } from "../text";
import { UserDropdownMenu } from "../user/user-dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = ({ user }: { user?: User }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-screen flex-col justify-items-center">
        <div className="flex-1 pt-10">
          <UserDropdownMenu user={user} />
        </div>
        <div className="felx-1">
          <BigTitle>game of skate</BigTitle>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex align-items-center pb-6">
      <div className="flex-1 pl-8 pt-8 justify-self-start">
        <UserDropdownMenu user={user} />
      </div>
      <div className="flex-8 text-center justify-self-center">
        <BigTitle>game of skate</BigTitle>
      </div>
      <div className="flex-1 pr-8 pt-8 justify-self-end"></div>
    </div>
  );
};
