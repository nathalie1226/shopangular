(function () {

    'use strict';
    var app = angular.module('myApp', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/dashboard.html',
                controller: 'StoreController'
            })
            .when('/cart', {
                templateUrl: 'partials/cart.html',
                controller: 'StoreController'
            })
            .when('/home', {
                templateUrl: 'partials/dashboard.html',
                controller: 'StoreController'
            })
            .when('/:id', {
                templateUrl: 'partials/description.html',
                controller: 'StoreController'
            })            

            .otherwise({redirectTo: '/'});

    });

})();