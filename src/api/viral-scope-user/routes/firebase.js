module.exports = {
    routes: [
        {
            method: "POST",
            path: "/viral-scope-user/auth",
            handler: "viral-scope-user.validateUser",
            config: {
                //auth: false,
            },
        },
    ],
};
