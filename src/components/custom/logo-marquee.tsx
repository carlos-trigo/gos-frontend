import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

interface LogoMarqueeProps {
  header?: boolean;
  footer?: boolean;
}
export const LogoMarquee = ({ header, footer }: LogoMarqueeProps) => {
  const Logos = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
    <svg
      key={index.toString()}
      // width="476"
      // height="469"
      width="inherit"
      height="inherit"
      viewBox="0 0 476 469"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      scale={0.3}
    >
      <path
        d="M106 398L158 430L283 459L338 444M34 120L133 62L208 103L227 22L283 103L416 73L454 112H378L283 170L272 245L362 346L292 422V340L235 289L133 306L158 391L65 271L185 250L192 178L141 120H34Z"
        stroke="black"
        stroke-width="18"
      />
    </svg>
  ));
  const HeaderMarquee = (
    <div className="overflow-hidden absolute bottom-0 left-0 flex-row justify-evenly w-screen h-30">
      <InfiniteMovingCards items={Logos} direction="left" speed="slow" />
    </div>
  );

  const FooterMarquee = (
    <div className="overflow-hidden absolute top-0 left-0 flex-row justify-evenly w-screen h-30">
      <InfiniteMovingCards items={Logos} direction="right" speed="slow" />
    </div>
  );

  if (header && footer)
    return (
      <>
        {HeaderMarquee}
        {FooterMarquee}
      </>
    );
  if (header) return <>{HeaderMarquee}</>;
  if (footer) return <>{FooterMarquee}</>;
};
