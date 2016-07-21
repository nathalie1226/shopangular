/**
 * Created by itc_user on 7/20/2016.
 */
(function () {
    var app = angular.module('myApp');

    app.controller("StoreController", StoreController);

    function StoreController($scope, $http, $routeParams) {


        $scope.productClicked = false;

        $scope.products = [];

        $scope.selectedProduct = {};


        $scope.productsBought = [];
        if (localStorage.getItem("productsBought")) {
            $scope.productsBought = JSON.parse(localStorage.getItem("productsBought"));

        }


        $http({
            method: 'GET',
            url: 'https://api.myjson.com/bins/3x9d9'
        }).then(function successCallback(response) {
            $scope.products = response.data;
            if ($routeParams.id) {
                $scope.selectedProduct = $scope.products.filter(function (item) {
                    return item.id == $routeParams.id;
                })[0];
            }
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


        $scope.itemsBought = 0;


        $scope.removeAllProducts = function () {
            localStorage.removeItem("productsBought");
            $window.location.reload();
        };
        $scope.addProduct = function (product) {
            $scope.itemInCart = false;
            $scope.total = 0;
            if (typeof $scope.productsBought == "undefined") {
                $scope.productsBought = [];
            }

            for (var i = 0; i < $scope.productsBought.length; i++) {

                if ($scope.productsBought[i].name === product.name) {
                    $scope.productsBought[i].quantity++;
                    $scope.itemsBought++;
                    $scope.itemInCart = true;
                }

            }

            if (!$scope.itemInCart) {
                $scope.productsBought.push({
                    name: product.name, price: product.price,
                    description: product.description, quantity: 1, image: {src: 'product.image.src'}
                });

            }
            for (var j = 0; j < $scope.productsBought.length; j++) {
                $scope.total = $scope.productsBought[j].quantity * $scope.productsBought[j].price;
            }
            localStorage.removeItem("productsBought");
            localStorage.setItem("productsBought", JSON.stringify($scope.productsBought));

        };
        // $scope.total = function () {
        //     var total = 0;
        //     angular.forEach($scope.productsBought, function (item) {
        //         total += item.qty * item.cost;
        //         console.log(total);
        //     })
        // };
    }

})();