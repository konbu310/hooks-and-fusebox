const { FuseBox, WebIndexPlugin, QuantumPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  target: "browser@es6",
  homeDir: "src",
  output: "dist/$name.js",
  tsConfig: "./tsconfig.json",
  sourceMaps: true,
  cache: false,
  plugins: [
    WebIndexPlugin({
      path: "./",
      template: "./src/index.html"
    }),
    process.env.NODE_ENV === "production" &&
      QuantumPlugin({
        uglify: true,
        treeshake: true,
        bakeApiIntoBundle: "app"
      })
  ]
});

fuse.dev();
fuse
  .bundle("app")
  .instructions(">index.tsx")
  .hmr()
  .watch();
fuse.run();
