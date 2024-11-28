const firebase = require("../../viral-scope-user/routes/firebase");

module.exports = {
    routes: [...firebase.routes],
};
