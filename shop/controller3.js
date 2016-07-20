/**
 * Created by itc_user on 7/20/2016.
 */
(function () {
    var app = angular.module('myApp', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/test.html',
                controller: 'StoreController'
            })
            .when('/:id', {
                templateUrl: 'partials/description.html',
                controller: 'StoreController'
            })
            .when('/cart', {
                templateUrl: 'partials/cart.html',
                controller: 'StoreController'
            })
            .when('/home', {
                templateUrl: 'partials/test.html',
                controller: 'StoreController'
            })
            .otherwise({redirectTo: '/'});

    });
    app.controller("StoreController", StController);

    function StController($scope, $http, $routeParams) {


        $scope.productClicked = false;

        $scope.products = [];
        $scope.selectedProduct = {};
        // angular.element(document).ready(function () {


        $http({
            method: 'GET',
            url: 'https://api.myjson.com/bins/3x9d9'
        }).then(function successCallback(response) {
            console.log(response);
            $scope.products = response.data;
            if ($routeParams.id) {
                $scope.selectedProduct = $scope.products.filter(function (item) {
                    return item.id == $routeParams.id;
                })[0];
                console.log($scope.selectedProduct);
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }

}) ();