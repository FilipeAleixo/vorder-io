import { withSSRContext } from 'aws-amplify'

const Protected = ({ authenticated, username }) => {
  if (!authenticated) {
    return <h1>Not authenticated</h1>
  }
  return <h1>Hello {username} from SSR route!</h1>
}

export async function getServerSideProps(context) {
  const { Auth } = withSSRContext(context)
  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user: ', user)
    return {
      props: {
        authenticated: true, username: user.username
      }
    }
  } catch (err) {
    return {
      props: {
        authenticated: false
      }
    }
  }
}

export default Protected