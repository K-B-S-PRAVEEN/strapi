/**
 * viral-scope-user controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::viral-scope-user.viral-scope-user');
const admin = require("../../../../config/firebase");
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::viral-scope-user.viral-scope-user', {
    async validateUser(ctx) {
        try {
            const { token } = ctx.request.body;

            // Verify Firebase Token
            const decodedToken = await admin.auth().verifyIdToken(token);
            const { email, uid } = decodedToken;

            // Find user in Strapi
            let users = await strapi.entityService.findMany('api::viral-scope-user.viral-scope-user', {
                filters: { email },
                limit: 1, // Limit to a single result
            });



            let user = users.length > 0 ? users[0] : null;

            if (!user) {
                // Create a new user in Strapi
                user = await strapi.entityService.create('api::viral-scope-user.viral-scope-user', {
                    data: {
                        username: email,
                        email: email,
                        provider: "firebase",
                        password: uid, // Hash this securely in production
                    },
                });
            }

            // Generate JWT Token
            const jwt = strapi.plugins["users-permissions"].services.jwt.issue({
                id: user.id, // Access `id` after ensuring `user` is not null
            });

            ctx.send({
                user,
                jwt,
            });
        } catch (error) {
            console.error("Firebase Auth Error: ", error);
            ctx.badRequest("Invalid Firebase token");
        }
    },
});

