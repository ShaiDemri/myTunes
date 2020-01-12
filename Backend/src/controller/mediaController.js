
const handleMedia = (req,res,next)=>{
    const {media} = req.ctx;

    res.status(200).send(media);
};


const fetchTop10 = (req, res, next) => {
    const {top10} = req.ctx;

    res.status(200).send(top10);
};


module.exports = {
    handleMedia,
    fetchTop10
};