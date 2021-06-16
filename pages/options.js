import React from 'react';
import Head from 'next/head';
import Router from 'next/router'
import axios from 'axios';
import { withSSRContext } from "aws-amplify";
import { AmplifyAuthContainer, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react'

const optionsEndpoint = 'https://app-dev.vorder.io/options';

const Options = ({ authenticated, username, idToken }) => {

  const [keyStatus, setKeyStatus] = useState('');
  const [formSubmitStatus, setFormSubmitStatus] = useState('');
  const [logout, setLogout] = useState(false); 

  const getAPIKeyStatus = () => {
    var userAPIKeyStatusTxt;
    axios.get(optionsEndpoint, {
      headers: {
        'username': username,
        Authorization : "Bearer " + idToken
      }
    }).then(response => {
      if (response.data.status == "API_KEY_VALID") {
        setKeyStatus("A valid API key/secret pair has already been inserted, but you can insert a new one below if you wish.");
      }
      else if (response.data.status == "API_KEY_UNDEFINED"){
        setKeyStatus("You have not yet introduced an API key/secret pair. Please introduce one below.");
      }
    });
  }

  const setAPIKey = event => {
    event.preventDefault();

    //console.log(username);
    //console.log(idToken);

    // Axios takes first the data object, and then the headers object
    axios.post(optionsEndpoint,
      {
          apiKey: event.target.apiKey.value,
          apiSecret: event.target.apiSecret.value
      },
      {
        headers: {
          'username': username,
          Authorization : "Bearer " + idToken
        }
      }
    ).then(response => {
        if (response.data.status == "API_KEY_UPDATED") {
          setFormSubmitStatus("API key/secret pair updated.");
        }
        else if (response.data.status == "API_KEY_UPDATE_ERROR") {
          setFormSubmitStatus("There's been an error updating the API key/secret pair.");
        }
        else if (response.data.status == "API_KEY_INVALID") {
          setFormSubmitStatus("Invalid API key/secret pair");
        }
    });
  }

  const signOut = () => {
    setLogout(true);
  }

  // Client-side
  useEffect(() => {
    if (!authenticated || logout) {
      Router.push('/auth')
      return;
    }
  }); 

  if (!authenticated) {
    return null;
  }

  useEffect(() => {
    getAPIKeyStatus()
  }, [keyStatus]);

  return (
    <div>
      <Head>
        <title>Vorder: Trading Crypto with Voice</title>
        <link href="/static/css/options.css" rel="stylesheet" />
      </Head>

      <div className='logout'>
        <AmplifySignOut style={{
          '--amplify-font-family': "'Source Sans Pro', 'sans-serif'",
          '--amplify-primary-color': '#000000',
        }} onClick={signOut}/>
      </div>

      <div className="set-api-key-form">
        <p>{keyStatus}</p>
        <form onSubmit={setAPIKey}>
          <h1>Set New Binance API Key</h1>
          <input type="text" name="apiKey" placeholder="API Key" required />
          <input type="text" name="apiSecret" placeholder="API Secret" required />
          <input type="submit" value="SUBMIT" />
        </form>
        <p>{formSubmitStatus}</p>
      </div>

    </div>
  );
}

// TODO This code is repeated. Didn't spend time looking for how to avoid that. Perhaps putting this in _app 
export async function getServerSideProps(context) {
  const { Auth } = withSSRContext(context)
  try {
    const user = await Auth.currentAuthenticatedUser()
    //console.log(JSON.stringify(user, null, 4))
    return {
      props: {
        authenticated: true, username: user.username, idToken: user.signInUserSession.idToken.jwtToken
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

export default Options;