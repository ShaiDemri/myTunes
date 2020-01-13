let selectedTrack = null;

const setTrack = (track) => {
    selectedTrack=track;
};


const getTrack = () => {
    return selectedTrack;
};


module.exports = {
    setTrack,
    getTrack
};