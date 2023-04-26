const express = require("express");
const cors = require("cors");

const hostname = "127.0.0.1";
const port = 5501;

const app = express();

const nodes = require("./module/nodes");

const get_list = function (i) {
  const re = nodes.related_knowledge(i);
  return re.map(node => ({ name: node.name, id: node.id }));
};


// Enable CORS for all origins
app.use(cors());

app.get("/api/get_list_r_knowledge/:num", (req, res) => {
  const arr = get_list(parseInt(req.params.num));
  res.json(arr);
});


const search = require("./module/search");
app.get("/api/search/:text", (req, res) => {
  const result = search.searchNode(req.params.text);
  if (result) {
    res.send(result.toString());
  } else {
    res.status(404).send("Not Found");
  }
});

app.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`);
});
