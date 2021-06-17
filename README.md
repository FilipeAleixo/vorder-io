# vorder-io

**vorder-io** is the Next.js front-end for Vorder, a Crypto trading voice assistant. 

This project is done to be hosted on AWS Amplify, using Server Side Rendering.

The back-end is in **vorder-eb**, which uses Elastic Beanstalk. It would take significant work, but that back-end could be replaced by Lambda API infrastructure directly using Amplify, so that the whole Vorder project would be limited to this repo.

This single page presentation website is based on https://github.com/codebushi/nextjs-starter-dimension

## Installation

Create **master** and **dev** environments on Amplify and connect each one of them to the respective CodeCommit branches for CI/CD.

That's pretty much it, the rest is just done using the Amplify CLI. 

## Important
Careful when merging **dev** into **master** or the other way around, because the file aws-exports.js is specific to each of the environments. To get the respective file for each environment after a merge, simply do **amplify pull**.