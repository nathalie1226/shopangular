/**
 * Created by itc_user on 7/17/2016.
 */
(function () {
    'use strict';
    var app = angular.module('myApp',['ngRoute'])

            .config(function ($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'shop.html',
                        controller: 'StoreController'
                    })
                    .when('/description', {
                        templateUrl: './partials/description.html',
                        controller: 'StoreController'
                    })
                    .when('/cart', {
                        templateUrl: './partials/cart.html',
                        controller: 'StoreController'
                    })
                    .otherwise({redirectTo: '/'});
            });


    })();
