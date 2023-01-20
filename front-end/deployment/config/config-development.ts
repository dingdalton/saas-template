/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://main.d32onvyue9xq9w.amplifyapp.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'us-east-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '72djinngnnp1qrg2volk45sdj9',
  USER_POOL_ID: 'us-east-1_W2duTt3oi',
  IDENTITY_POOL_ID: 'us-east-1:9572ed33-1b7c-4ee2-a417-a640d085992b',
  GRAPHQL_ENDPOINT: 'https://qpprfh4zoffs5dbhnjgm7yczhm.appsync-api.us-east-1.amazonaws.com/graphql',
};

export default configDevelopment;
