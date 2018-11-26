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
    {
        path: '/register/',
        url: './pages/account_registreer.html'
    },
    {
        path: '/login/',
        url: './pages/login.html'
    },
    {
        path: '/forgotPassword/',
        url: './pages/account_wachtwoordVergeten.html'
    },
    {
        path: '/order/',
        url: './pages/bestel_bestel.html'
    },
    {
        path: '/orderValidate/',
        url: './pages/bestel_bestellingKlantValideren.html'
    },
    {
        path: '/orderTimeLine/',
        url: './pages/bestel_timelineBestellingEten.html'
    },
    {
        path: '/choice/',
        url: './pages/keuze_keuze.html'
    },
    {
        path: '/choiceAdmin/',
        url: './pages/keuze_keuzeAdmin.html'
    },
    {
        path: '/choiceEmployee/',
        url: './pages/keuze_keuzeWerknemer.html'
    },
    {
        path: '/reservationClientValidate/',
        url: './pages/reserveer_reservatieKlantValideren.html'
    },
    {
        path: '/reservation/',
        url: './pages/reserveer_reserveer.html'
    },
    {
        path: '/view_employees/',
        url: './pages/werknemers_werknemerBekijken.html'
    },
    
    // Default route (404 page). MUST BE THE LAST
    {
        path: '/404/',
        url: './pages/404.html'
    }
];