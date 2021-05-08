// This is an example of using object literal
// instead of switch case statement

const PRODUCTION = 'Production';
const STAGING = 'Staging';
const THETA = 'Theta';
const DEFAULT = 'Default';

const API_ROUTES = {
  [PRODUCTION]: 'my-website.example/api/page-X',
  [STAGING]: 'my-website-staging.exmaple/api/page-X',
  [THETA]: 'my-website-theta.example/api/page-X',
  [DEFAULT]: 'No such API route. Please provide correct one!',
};

const getAPIUrl = (environment, apiRoute) => {
  return apiRoute !== undefined
    ? `Return the ${environment} endpoint for versionX/page: ===> ${apiRoute} <=== `
    : API_ROUTES[DEFAULT];
};

console.log(getAPIUrl(PRODUCTION, API_ROUTES[PRODUCTION]));
console.log(getAPIUrl(STAGING, API_ROUTES[STAGING]));
console.log(getAPIUrl(THETA, API_ROUTES[THETA]));
console.log(getAPIUrl(THETA, API_ROUTES['WRONG API ROUTE']));
