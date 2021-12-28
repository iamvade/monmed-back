module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1efb8f8f6fd261bf808ccfd698b9c2c6'),
  },
});
