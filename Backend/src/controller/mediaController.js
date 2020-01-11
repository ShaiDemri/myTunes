const mediaModel = require('../model/mediaModel');
const axios = require("axios");

const iTunesURL='https://itunes.apple.com/search?limit=25&term=';

const getData = async query => {
    try {
        const response = await axios.get(iTunesURL + query);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const fetchMedia = async (req, res, next) => {
    const {query} = req.params;
    const media = await getData(query);
    res.status(200).json(media);
};

const fetchTop10 = (req, res, next) => {
    res.status(200).send(["num1", "num2", "num3", "num4", "num5", "num6", "num7", "num8", "num9", "num10",]);
};


module.exports = {
    fetchMedia,
    fetchTop10
};