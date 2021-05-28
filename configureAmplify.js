import Amplify from "aws-amplify";
import { API } from 'aws-amplify';
import awsExports from "./aws-exports";
Amplify.configure({ ...awsExports});