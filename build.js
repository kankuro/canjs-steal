const stealTools = require("steal-tools");

stealTools.build(
    {
        config: `${__dirname}/package.json!npm`,
        main: ["app/App", "app/login/Login"]
    },
    {
        minify: true,
        sourceMaps: true,
        bundleSteal: true,
        bundleAssets: true,
        maxMainRequests: 5,
        maxBundleRequests: 5,
        sourceMapsContent: true
    }
);
