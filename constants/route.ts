const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  COMUNITY: "/community",
  COLLECTION: "/collections",
  SIGN_IN_WITH_OAUTH: "/signin-with-oauth",
  JOBS: "/find-jobs",
  TAGS: "/tags",
  PROFILE: (id: string) => `/profile/${id}`,
  ASK_QUESTION: "/ask-a-question",
  QUESTION: (id: string) => `/questions/${id}`,
  TAG: (id: string) => `/tags/${id}`,
};

export default ROUTES;
