import { User } from '@auth0/auth0-react'
import { FlexColCentered } from './layout/containers'
import styled from 'styled-components'
import { Text } from './text'
import { fonts, fontSize } from './style'
import { useState } from 'react'

export const UserCard = ({ user }: { user?: User }) => {
  const [hover, setHover] = useState(false)
  if (!user) return <></>

  return (
    <FlexColCentered width='100px' height='100px' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {hover ? (
        <Text size={fontSize.s} family={fonts.barrio}>
          {user.nickname}
        </Text>
      ) : (
        <RoundedImg src={user.picture} />
      )}
    </FlexColCentered>
  )
}

const RoundedImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: -10px;
`
