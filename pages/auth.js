import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { AmplifyAuthenticator, AmplifyAuthContainer, AmplifySignUp, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
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
    Router.push('https://app.vorder.io')
    return <p>Redirecting...</p>
  }

  return (
    <AmplifyAuthContainer>
        <AmplifyAuthenticator usernameAlias="email">
          <AmplifySignUp
            slot="sign-up"
            usernameAlias="email"
            formFields={[
              {
                type: "email",
                label: "Email Address *",
                placeholder: "Enter your email address",
                inputProps: { required: true, autocomplete: "username" },
              },
              {
                type: "password",
                label: "Password *",
                placeholder: "Enter your password",
                inputProps: { required: true, autocomplete: "new-password" },
              },
            ]} 
          />
          <AmplifySignIn slot="sign-in" usernameAlias="email" />
        </AmplifyAuthenticator>
    </AmplifyAuthContainer>
  );
}

export default Auth;