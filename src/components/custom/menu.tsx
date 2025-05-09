import { Button } from "../ui/button";

export const Menu = ({
  items,
}: {
  items: { text: string; callback: () => void }[];
}) => {
  const menuItems = items.map((item, index) => (
    <div className="flex w-full justify-center">
      <Button
        className="dark text-3xl text-center pt-6 pb-5 my-3 px-21 capitalize"
        //  className="dark w-70 text-4xl text-center px-10 pt-6 pb-5 my-3 capitalize"
        onClick={item.callback}
        key={index.toString()}
      >
        {item.text}
      </Button>
    </div>
  ));
  return <div>{menuItems}</div>;
};
