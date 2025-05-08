import { Button } from "../ui/button";

export const Menu = ({
  items,
}: {
  items: { text: string; callback: () => void }[];
}) => {
  const menuItems = items.map((item, index) => (
    <div className="flex-none" key={index.toString()}>
      <Button
        className="dark w-70 text-4xl text-center px-10 pt-6 pb-5 my-3 capitalize"
        onClick={item.callback}
      >
        {item.text}
      </Button>
    </div>
  ));
  return (
    <div className="flex-col flex-nowrap justify-items-center">{menuItems}</div>
  );
};
