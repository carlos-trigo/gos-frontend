import { FullPage } from '../components/layout/full-page'
import { Login, Logout } from '../components/auth'
import { BigTitle } from '../components/text'
import { useAuth0 } from '@auth0/auth0-react'

export const Landing = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  console.log(user)
  return (
    <FullPage>
      <BigTitle style={{ marginTop: '30vh' }}>game of skate</BigTitle>
      {isAuthenticated ? <Logout /> : <Login />}
    </FullPage>
  )
}
