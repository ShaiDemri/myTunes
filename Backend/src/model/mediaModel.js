let mediaList = [];

const addMedia = (link) => {
    console.log('In Add media Model');
    mediaList.push(link);
};


const getAllMedia = async () => {
    console.log('In get all Media');
    return mediaList;
};


module.exports = {
    addMedia,
    getAllMedia
};