module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],

          // load images from anywhere
          'img-src': [
            "'self'",
            'data:',
            'https:',
            'blob:',
            'res.cloudinary.com',
          ],
          // load media from anywhere
          'media-src': [
            "'self'",
            'data:',
            'https:',
            'blob:',
            'res.cloudinary.com',
          ],

          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // 'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
