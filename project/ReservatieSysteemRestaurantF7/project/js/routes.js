'use strict';
var routes = [
  // Index page
    {
        path: '/',
        url: './index.html',
        name: 'home'
    },
    {
        path: '/about/',
        url: './pages/about.html'
    },
    // Default route (404 page). MUST BE THE LAST
    {
        path: '/404/',
        url: './pages/404.html'
    }
];