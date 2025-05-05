import styled from "styled-components";
import { FlexCentered } from "../layout/containers";
import { fontSize } from "../style";
import { Text } from "../text";
import { User } from "@auth0/auth0-react";
import { Skater } from "@/types/backend";

export const SkaterCard = ({ skater }: { skater: Skater }) => {
  return (
    <FlexCentered width="400px" height="100px">
      <RoundedImg src={skater.picture} />
      <FlexCentered direction="column" width="300px">
        <Text size={fontSize.m}>{skater.name}</Text>
        <Text size={fontSize.s}>{skater.email}</Text>
      </FlexCentered>
    </FlexCentered>
  );
};

export const UserCard = ({ user }: { user?: User }) => {
  if (!user) return <></>;
  console.log(user.picture);
  return (
    <div className="flex-col">
      <RoundedImg src={user.picture} />
    </div>
  );
};

const RoundedImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: -10px;
`;
