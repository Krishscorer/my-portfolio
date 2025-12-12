const ghpages = require('gh-pages');

ghpages.publish('dist', {
  repo: 'https://github.com/Krishscorer/my-portfolio.git',
  branch: 'gh-pages',
  message: 'Deploy to GitHub Pages',
  user: {
    name: 'GitHub Actions',
    email: 'actions@github.com'
  }
}, function(err) {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('Deployment successful!');
  }
});