export default {
  routes: [
    {
      method: "GET",
      path: "/health",
      handler: "health.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
