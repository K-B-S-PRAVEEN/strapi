var admin = require("firebase-admin");

var serviceAccount = require("/path/to/your/firebase-adminsdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


module.exports = admin;
