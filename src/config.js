const dev = {
  WCBASEURL:
    'https://www.wolframcloud.com/objects/user-4d8176ae-c8bc-4af9-9e6a-0a58bd35f379/'
}

const prod = {}

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
}
