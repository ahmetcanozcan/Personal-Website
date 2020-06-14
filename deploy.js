const ghpages = require("gh-pages");


ghpages.publish("dist/",
  {
    branch: "master",
    repo: "https://github.com/ahmetcanozcan/ahmetcanozcan.github.io"
  },
  function (err) {
    if (err) {
      return console.error("An error occured when deploying ", err);
    }

    console.log("Project deployed succesfully");

  }
)