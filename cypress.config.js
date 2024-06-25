const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    BASE_API_URI: "http://localhost:8000",
    BASE_FRONT_END_URL: "http://localhost:3000",
  },
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      
    },
  },
});
