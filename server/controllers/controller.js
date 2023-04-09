//import { sources } from '../data.js';
const {Router} = require('express');
const data = require('../data');
module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    sources: (req, res) => {
        res.json({"message": data.sources});
    },
    add_source: (req, res) => {
        const source = {id: (data.sources.length + 1), name: req.params.name, email: req.params.email};
        a = data.sources.concat(source);
        res.json({"message": a});
    },
    delete_source: (req, res) => {
        r = data.sources.filter(source => source.id != req.params.id);
        data.sources = r;
        res.json({"message": data.sources});
    },
};