const nodes = require("./nodes")

function searchNode(inputText) {
    let best_match_id = null;
    let max_match_count = 0;

    nodes.g.forEachNode((node) => {
        const tags = node.data.tags;
        let match_count = 0;

        for (let i = 0; i < tags.length; i++) {
            if (inputText.toLowerCase().includes(tags[i].toLowerCase())) {
                match_count++;
            }
        }

        if (match_count > max_match_count) {
            max_match_count = match_count;
            best_match_id = node.data.id;
        }
    });

    return best_match_id;
}

console.log(searchNode("Khái niệm của đa hình"));

module.exports.searchNode = searchNode;