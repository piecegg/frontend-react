// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "W5Xg5nrjWlx1fpsW43Ns40hC0",
  TWITTER_CONSUMER_SECRET: "TtYbkdlxmTLOMVqLZ2ZHw3mPagxgAVEqDc5bzpZf1PBvqFPzLf",
  TWITTER_ACCESS_TOKEN: "750727362669608961-bGLCUiEXccG4HdAcZi4JBYyeO0ao5Dc",
  TWITTER_TOKEN_SECRET: "XQQH70bK5aVMFoihgKZgHHj2pAeFnXFspSsQwXfiynJ5b"
};

const DB_USER = "root";
const DB_PASSWORD = "root";
const MONGODB = {
  MONGODB_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ry4chbq.mongodb.net/piecegg`
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome",
  ORIGIN_URL: "http://127.0.0.1:3000",

};
const URL = {
  CALLBACK_URL: "http://127.0.0.1:4000/auth/twitter/redirect",
  FAILURE_REDIRECT: "http://127.0.0.1:4000/auth/login/failed",
  
  CLIENT_HOME_PAGE_URL: "http://127.0.0.1:3000/pieces",
  CLIENT_LOGIN_PAGE_URL: "http://127.0.0.1:3000/",
}
const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION,
  ...URL
};

module.exports = KEYS;