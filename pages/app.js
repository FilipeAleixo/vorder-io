import React from 'react';
import Head from 'next/head';

const VorderApp = (props) => {

  return (
    <div>
      <Head>
        <title>Vorder: Trading Crypto with Voice</title>
        <link href="/static/css/voiceapp.css" rel="stylesheet" />
        <script src="https://www.WebRTC-Experiment.com/RecordRTC.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io-stream/0.9.1/socket.io-stream.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/kopiro/siriwave/dist/siriwave.umd.js"></script>
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

      <script src="/static/js/vorder.js"></script>
      <script src="/static/js/porcupine/web_voice_processor.js"></script>
      <script src="/static/js/porcupine/porcupine_manager.js"></script>

    </div>



  );
}

export default VorderApp;