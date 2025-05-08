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
    <div className="w-screen h-dvh flex-col justify-items-center">
      <div className="w-screen">{header}</div>
      <div className="w-screen  -mt-4 mb-14">
        <p className="text-center text-3xl">{title}</p>
      </div>
      <div className="w-screen h-full">{content}</div>
      <LogoMarquee footer />
    </div>
  );
};
