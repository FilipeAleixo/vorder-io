import { useState, useEffect } from 'react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { AmplifyAuthenticator, AmplifyAuthContainer, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import Router from 'next/router'

const Auth = (props) => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData);
          //console.log(`authData: ${JSON.stringify(authData, null, 2)}`);
      });
  }, []);

  if (authState === AuthState.SignedIn && user) {
    Router.push('/app')
    return <p>Redirecting...</p>
  }

  return (
    <AmplifyAuthContainer>
        <AmplifyAuthenticator usernameAlias="email"
          style={{
            '--amplify-font-family': "'Source Sans Pro', 'sans-serif'",
            '--amplify-primary-color': '#000000',
          }}
        >
          <AmplifySignUp
            slot="sign-up"
            usernameAlias="email"
            formFields={[
              {
                type: "email",
                label: "Email Address *",
                placeholder: "Enter your email address",
                inputProps: { required: true },
              },
              {
                type: "password",
                label: "Password *",
                placeholder: "Enter your password",
                inputProps: { required: true },
              },
            ]} 
          />
          <AmplifySignIn slot="sign-in" usernameAlias="email" />
        </AmplifyAuthenticator>
    </AmplifyAuthContainer>
  );
}

export default Auth;