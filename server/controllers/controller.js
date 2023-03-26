module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    sources: (req, res) => {
        res.json({"message": "Retrieving"});
    },
    add_source: (req, res) => {
        res.json({"message": "Adding"});
    },
    delete_source: (req, res) => {
        res.json({"message": "Deleting"});
    },
};