const axios = require('axios');
const mongoose = require("mongoose");
const queryDbModel = require("../model/db/queryDbModel");


const iTunesURL = 'https://itunes.apple.com/search?limit=25&term=';

const headerExtractor = (req, res, next) => {
    const {email} = req.headers;
    req.ctx = {...req.ctx,email};
    next();
};

const getData = async (url, query) => {
    try {
        const response = await axios.get(url + query);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const fetchMedia = async (req, res, next) => {
    const {query} = req.params;
    const media = await getData(iTunesURL, query);
    req.ctx = {...req.ctx,media};
    next();
};

const storeTermInDb = async (req, res, next) => {
    const {query} = req.params;
    const {email} = req.ctx;
    console.log("storeTermInDb email",email);

    queryDbModel.findOneAndUpdate(
        {user: email, query: query},
        {$inc: {count: 1}},
        {
            upsert: true,
            setDefaultsOnInsert: true
        },
        (err) => {
            err
                ? console.log("Error while updating: ", err)
                : next();
        }
    );
};

const fetchTop10 = (req, res,next) => {

    const {email} = req.ctx;
    console.log("fetchTop10 email",email);

    queryDbModel.aggregate(
        [{ $match: { user: email } }, { $sort: { count: -1 } }, { $limit: 10 }],
        (err, result) => {
            if (err) {
                next(err)
            } else {
                req.ctx = {...req.ctx,top10:result};
                next();
            }
        }
    );
};


module.exports = {
    fetchMedia,
    storeTermInDb,
    fetchTop10,
    headerExtractor
};