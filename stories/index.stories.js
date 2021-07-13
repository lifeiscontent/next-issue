import Page from "../src/pages/index";

export default {
  title: "Welcome",
};

export const Issue = Page;

Issue.parameters = {
  nextRouter: {
    pathname: "/",
  },
};
