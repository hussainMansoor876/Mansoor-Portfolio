const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'testally.com',
        pathname: '/static/media/**',
      },
      {
        protocol: 'https',
        hostname: 'fms-bdqbukgwtq-ez.a.run.app',
        pathname: '/new-logo.jpg',
      },
      {
        protocol: 'https',
        hostname: 'winbig-money.netlify.app',
        pathname: '/static/media/logo.d6113508781a2196ded4.png',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/di_search_test_bucket/**',
      },
      {
        protocol: 'https',
        hostname: 'securetech.filemodifier.com',
        pathname: '/static/media/logoVM.a59e3d40ed7478dbac76.png',
      },
      {
        protocol: 'https',
        hostname: 'game-beroni.netlify.app',
        pathname: '/static/media/logo.6ee4fc222e72a7e2f6cc.png',
      },
      {
        protocol: 'https',
        hostname: 'wgpplaza.com',
        pathname: '/static/media/**',
      },
      {
        protocol: 'https',
        hostname: 'leisure-cmsc7hs4ha-ez.a.run.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'villa-rental-zk5zju52ca-ez.a.run.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'blockconsult.netlify.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'tenstat.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'clanic-app-zk5zju52ca-ez.a.run.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'fms-new-zk5zju52ca-ez.a.run.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'apps.disearch.ai',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'file-modifier.netlify.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'upperlevelsweeps.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'provinciedeals.nl',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'hourly4u.com',
        pathname: '**',
      },
    ],
  },
};
