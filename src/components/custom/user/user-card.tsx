import styled from "styled-components";
import { FlexCentered } from "../layout/containers";
import { fonts, fontSize } from "../style";
import { Text } from "../text";
import { useState } from "react";
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
  const [hover, setHover] = useState(false);
  if (!user) return <></>;

  return (
    <FlexCentered
      direction="column"
      width="100px"
      height="100px"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <Text size={fontSize.s} family={fonts.barrio}>
          {user.nickname}
        </Text>
      ) : (
        <RoundedImg src={user.picture} />
      )}
    </FlexCentered>
  );
};

const RoundedImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: -10px;
`;
