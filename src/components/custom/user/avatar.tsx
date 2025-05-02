import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  pictureUrl: string;
  name: string;
}

export const UserAvatar = ({ pictureUrl, name }: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={pictureUrl} alt="avatar" />
      <AvatarFallback>{name[0]}</AvatarFallback>
    </Avatar>
  );
};
