import { FullPage } from '../components/layout/full-page'
import { Login, Logout } from '../components/auth'
import { BigTitle, Text } from '../components/text'
import { useAuth0 } from '@auth0/auth0-react'

export const Unauthorized = () => {
  ;<div>You must login to access this page</div>

  return (
    <FullPage>
      <BigTitle>game of skate</BigTitle>
      <Text>You must login to access this page</Text>
      <Login />
    </FullPage>
  )
}
