const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "http://localhost:9000",
    token:
      "sqp_a527b26faa82960187a72c41cfce2293060a2335e838dd064de0e78c5c39bcbb23aeb758353944ca",
    options: {
      "sonar.projectName": "sonarqube-netflixgpt",
      "sonar.projectDescription": "Here I can add a description of my project",
      "sonar.projectKey": "sonarqube-netflixgpt",
      "sonar.projectVersion": "0.0.1",
      "sonar.exclusions": "",
      "sonar.sourceEncoding": "UTF-8",
    },
  },
  () => process.exit()
);
