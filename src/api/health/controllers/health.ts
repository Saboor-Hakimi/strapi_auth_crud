/**
 * A set of functions called "actions" for `health`
 */

export default {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = { status: "ok" };
    } catch (err) {
      ctx.body = err;
    }
  },
};
