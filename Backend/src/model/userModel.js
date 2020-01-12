let activeUser = null;

const setUser = (user) => {
    activeUser=user;
};


const getUser = async () => {
    return activeUser;
};


module.exports = {
    setUser,
    getUser
};