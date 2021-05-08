const TEST_DATA = 'hello.world@testmail.com';

const maskifiedEmail = (email) => {
  const [USERNAME, EMAIL_CLIENT_DOMAIN] = email.split('@');
  return `${USERNAME[0]}${new Array(USERNAME.length).join(
    '*'
  )}@${EMAIL_CLIENT_DOMAIN}`;
};

console.log(maskifiedEmail(TEST_DATA));
