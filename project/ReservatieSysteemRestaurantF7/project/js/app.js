'use strict';
/*global */
// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';

if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
    id: 'be.odisee.mi2.exep2',
    root: '#app',
    theme: theme,
    routes: routes
});

var mainView = app.views.create('.view-main');
// de data voor de btw tarieven kan gevonden worden op :
// https://ophalvens.net/mi2/examen/vat.php?m=all

$(function () {
    $.ajax({
        type: 'GET',
        datatype: 'JSON',
        url: 'https://ophalvens.net/mi2/examen/vat.php?m=all'
    }).done(function (response) {
        var object1 = JSON.parse(response);
        for (i = 0; i < object1.features.length; i += 1) {
            // onPageInit
        }
    });
});