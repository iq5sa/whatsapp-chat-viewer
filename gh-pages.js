var ghpages = require('gh-pages');

ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://sajjadasaad.com', // Update to point to your repository
        user: {
            name: 'sajjad', // update to use your name
            email: 'info@sajjadasaad.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);