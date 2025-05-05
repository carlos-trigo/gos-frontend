import { User } from "@auth0/auth0-react";
import { BigTitle } from "../text";
import { UserDropdownMenu } from "../user/user-dropdown-menu";
import { BrowserView, MobileView } from "react-device-detect";

export const Header = ({ user }: { user?: User }) => {
  return (
    <>
      <BrowserView>
        <div className="w-screen flex justify-items-center pb-6">
          <div className="flex-1 pl-8 pt-8 justify-self-start">
            <UserDropdownMenu user={user} />
          </div>
          <div className="flex-8 text-center justify-self-center">
            <BigTitle>game of skate</BigTitle>
          </div>
          <div className="flex-1 pr-8 pt-8 justify-self-end"></div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="w-screen flex-col justify-items-center">
          <div className="flex-1 pt-10">
            <UserDropdownMenu user={user} />
          </div>
          <div className="felx-1">
            <BigTitle>game of skate</BigTitle>
            {/* <svg
              // width="476"
              // height="469"
              width="80"
              viewBox="0 0 476 469"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              scale={0.3}
            >
              <path
                d="M106 398L158 430L283 459L338 444M34 120L133 62L208 103L227 22L283 103L416 73L454 112H378L283 170L272 245L362 346L292 422V340L235 289L133 306L158 391L65 271L185 250L192 178L141 120H34Z"
                stroke="oklch(0.77 0.1389 89.54)"
                strokeWidth="18"
              />
            </svg> */}
          </div>
        </div>
      </MobileView>
    </>
  );
};
