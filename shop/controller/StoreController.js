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
            $scope.total = parseInt(localStorage.getItem("total"));
            $scope.itemsBought = parseInt(localStorage.getItem("itemsBought"));


        }


        $http({
            method: 'GET',
            // url: 'https://api.myjson.com/bins/3x9d9'
            url:'https://api.myjson.com/bins/3itdt'
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





        $scope.removeAllProducts = function () {
            localStorage.removeItem("productsBought");
            localStorage.removeItem('total');
            localStorage.removeItem('itemsBought');

        };
        $scope.addProduct = function (product) {
            $scope.itemInCart = false;
            document.getElementById("level");

            if (typeof $scope.productsBought == "undefined") {
                $scope.productsBought = [];

            }

            $scope.total = 0;
            $scope.itemsBought = 0;
            for (var i = 0; i < $scope.productsBought.length; i++) {

                if ($scope.productsBought[i].name === product.name) {
                    $scope.productsBought[i].quantity++;
                    $scope.itemInCart = true;
                }

            }

            if (!$scope.itemInCart) {
                $scope.productsBought.push({
                    name: product.name, price: product.price,
                    description: product.description, quantity: 1, image:product.image
                });

            }
            $scope.itemsBought++;
            console.log( $scope.itemsBought);
            for (var j = 0; j < $scope.productsBought.length; j++) {
                $scope.total += $scope.productsBought[j].quantity * $scope.productsBought[j].price;

            }
            localStorage.setItem("productsBought", JSON.stringify($scope.productsBought));
            localStorage.setItem("total", JSON.stringify($scope.total));
            localStorage.setItem("itemsBought", JSON.stringify($scope.itemsBought));
            console.log("after the JSON"+$scope.itemsBought);


        };

        $scope.removeItem = function (index) {
            $scope.itemsBought = parseInt(localStorage.getItem("itemsBought"));
            $scope.total -= $scope.productsBought[index].price;
            if ($scope.productsBought[index].quantity > 1) {
                $scope.productsBought[index].quantity--;
            }
            else {
                $scope.productsBought.splice(index, 1);
                console.log("in" + index);
                console.log("in again" + $scope.productsBought);
            }
            $scope.itemsBought--;
            console.log($scope.itemsBought);
            localStorage.setItem("productsBought", JSON.stringify($scope.productsBought));
            localStorage.setItem("total", JSON.stringify($scope.total));
            localStorage.setItem("itemsBought", JSON.stringify($scope.itemsBought));
            console.log($scope.itemsBought);
        };


    }

})();