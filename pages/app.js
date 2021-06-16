import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { withSSRContext } from "aws-amplify";
import { useState, useEffect } from 'react';

const VorderApp = ({ authenticated, username, idToken }) => {

  const loadScript = url => new Promise(resolve => {
    const tag = document.createElement('script');
    tag.async = false;
    tag.src = url;
    const body = document.body;
    body.appendChild(tag);
    tag.addEventListener('load', resolve, {
      once: true
    });
  });

  useEffect(() => {

    alert(process.env.NEXT_PUBLIC_BACKEND_ENDPOINT);

    if (!authenticated) {
      Router.push('/auth')
      return;
    }
    {/* Loading all dependencies before vorder.js gets loaded.
    Also, loading this way because it's loading after everything in the page has been loaded, 
    since for the vorder.js script I need the `idToken` variable to be already set once the script loads */}
    window.cognitoSignInData = { username: username, idToken: idToken };
    Promise.all([
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"),
      loadScript("https://www.WebRTC-Experiment.com/RecordRTC.js"),
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js"),
      loadScript("https://cdn.jsdelivr.net/gh/kopiro/siriwave/dist/siriwave.umd.js"),
      loadScript("/static/js/porcupine/web_voice_processor.js"),
      loadScript("/static/js/porcupine/porcupine_manager.js")
      ])
    .then(loadScript("/static/js/vorder.js"))
  }, []);

  if (!authenticated) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Vorder: Trading Crypto with Voice</title>
        <link href="/static/css/voiceapp.css" rel="stylesheet" />
      </Head>

      {/* Top Info */}
      <div id="title">
        <div id="headerLeft">Vorder</div>
        <span id="headerCenter"></span>
        <div id="headerRight"></div>
      </div>

      {/* Controls */}
      <div className="controlsOuter">
        <div className="controlsInner">
          <div id="loading"></div>
          <div className="btn" id="startBtn"></div>
          <div className="btn" id="waitingWakeWordBtn"></div>
          <div className="btn" id="recordingBtn"></div>
        </div>
        <div className="btn" id="settingsBtn"></div>
        <div className="btn" id="volumeBtn"></div>
      </div>

      {/* Microphone Waveform */}
      <div id="waveform"></div>

      {/* Volume */}
      <div id="volume" className="fadeout">
        <div id="barFull" className="bar"></div>
        <div id="barEmpty" className="bar"></div>
        <div id="sliderBtn"></div>
      </div>

    </div>
  );

}

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

export default VorderApp;