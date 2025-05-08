import styled from "styled-components";
import { JSX } from "react";
import { LogoMarquee } from "../logo-marquee";

export const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Layout = ({
  header,
  content,
  title = "",
}: {
  header: JSX.Element;
  content: JSX.Element;
  title?: string;
}) => {
  return (
    <FullPage>
      <div className="w-screen h-dvh flex-col justify-items-center">
        <div className="w-screen">{header}</div>
        <div className="w-screen -mt-4 mb-14">
          <p className="text-center text-3xl">{title}</p>
        </div>
        <div className="w-screen h-full">{content}</div>
        <LogoMarquee footer />
      </div>
    </FullPage>
  );
};

export const GridLayout = ({
  header,
  content,
  title = "",
}: {
  header: JSX.Element;
  content: JSX.Element;
  title?: string;
}) => {
  return (
    <FullPage>
      <div className="w-screen h-dvh grid grid-cols-1 auto-rows-[10vh] gap-y-0 gap-x-2">
        <div className="w-screen row-span-2">{header}</div>
        <div className="w-screen row-span-1 flex-col items-center justify-center -pt-4 pb-14">
          <p className="text-center text-3xl">{title}</p>
        </div>
        <div className="w-screen row-span-6 h-full">{content}</div>
        <LogoMarquee footer />
      </div>
    </FullPage>
  );
};
