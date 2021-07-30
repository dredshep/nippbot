module.exports = {
  apps: [
    {
      name: "nippbot",
      script: "./index.ts",
      interpreter: "deno",
      interpreterArgs: "run --allow-net --allow-read --allow-env=TOKEN",
    },
  ],
};
