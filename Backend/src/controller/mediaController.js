const trackModel=require('../model/trackModel');
const handleMedia = (req,res,next)=>{
    const {media} = req.ctx;

    res.status(200).send(media);
};


const fetchTop10 = (req, res, next) => {
    const {top10} = req.ctx;

    res.status(200).send(top10);
};
const setSelected= (req, res, next)=>{
    const tune = req.body;
    trackModel.setTrack(tune);
    res.status(200).send();
};
const getSelected= (req, res, next)=>{
    const tune = req.body;
    let track = trackModel.getTrack();
    res.status(200).send(track);
};


module.exports = {
    handleMedia,
    fetchTop10,
    setSelected,
    getSelected
};