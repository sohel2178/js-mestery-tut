const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  COMUNITY: "/community",
  COLLECTION: "/collections",
  JOBS: "/find-jobs",
  TAGS: "/tags",
  PROFILE: "/profile",
  ASK_QUESTION: "/ask-a-question",
  QUESTION: (id: string) => `/questions/${id}`,
  TAG: (id: string) => `/tags/${id}`,
};

export default ROUTES;
