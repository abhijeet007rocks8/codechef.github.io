module.exports = {
  exportTrailingSlash: true,
    exportPathMap: function () {
      return {
        "/": { page: "/" },
        "/Team": { page: "/Team" },
        "/Articles": { page: "/Articles" },
        "/Leaderboard": { page: "/Leaderboard" },
        "/Events": { page: "/Events" },
      };
    },
    webpack: (config, { dev }) => {
      config.module.rules = config.module.rules.map((rule) => {
        if (rule.loader === "babel-loader") {
          rule.options.cacheDirectory = false;
        }
        return rule;
      });
      return config;
    },
  };