/**
 * Created by itc_user on 7/20/2016.
 */
/**
 * Created by itc_user on 7/17/2016.
 */
(function () {
    var app = angular.module('myApp', ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/test.html',
                controller: 'StoreController'
            })
            .when('/partials/description', {
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

    app.factory("myFactory", function (product) {
        var productsBought = [{
            name: 'diapers',
            price: 60,
            description: "cool",
            image: {src: './images/diaper-bag.jpg'}
        }];
        var itemsBought = 0;
        productsBought.nathalie = function () {
            return function addProduct() {
                productsBought.push({
                    name: product.name, price: product.price,
                    description: product.description, image: {src: 'product.image.src'}
                });
                itemsBought++;
                console.log(productsBought);
            }


        };

        var product={};
            
            product.bou=function(){
                return  [{
                    name: 'diapers',
                    price: '25',
                    showD: true,
                    description: 'an amazing package of diapers for your baby',
                    stock: '3',
                    soldOut: false,
                    canPurchase: true,
                    addToCart: false,
                    image: {src: './images/diapers.jpg'}
                },
                    {
                        name: 'baby bottle',
                        price: '30',
                        showD: false,
                        description: 'bottle that your baby will love',
                        stock: '3',
                        soldOut: false,
                        canPurchase: true,
                        addToCart: false,
                        image: {src: './images/bottle.jpg'}
                    },
                    {
                        name: 'pacifier',
                        price: '5',
                        showD: false,
                        description: 'must have',
                        stock: '0',
                        soldOut: true,
                        canPurchase: true,
                        addToCart: false,
                        image: {src: './images/pacifier.jpg'}
                    },
                    {
                        name: 'stroller',
                        price: '250',
                        showD: false,
                        description: 'an amazing package of diapers for your baby',
                        stock: '3',
                        soldOut: false,
                        canPurchase: true,
                        addToCart: false,
                        image: {src: './images/doona.jpg'}
                    },
                    {
                        name: 'formula',
                        price: '15',
                        showD: false,
                        description: 'best formula your baby will love it',
                        stock: '4',
                        soldOut: false,
                        canPurchase: true,
                        addToCart: false,
                        image: {src: './images/formula.jpg'}
                    },
                    {
                        name: 'bath',
                        price: '20',
                        showD: false,
                        description: 'must have',
                        stock: '0',
                        soldOut: true,
                        canPurchase: true,
                        addToCart: false,
                        image: {src: './images/bath.jpg'}
                    },
                    {
                        name: 'carrier',
                        price: '100',
                        showD: false,
                        description: 'an amazing package of diapers for your baby',
                        stock: '3',
                        soldOut: false,
                        canPurchase: true,
                        addToCart: false,
                        image: {src: './images/baby-carrier.jpg'}
                    },
                    {
                        name: 'crib',
                        price: '650',
                        showD: false,
                        description: 'bottle that your baby will love',
                        stock: '3',
                        soldOut: false,
                        canPurchase: true,
                        addToCart: false,
                        image: {src: './images/crib.jpg'}
                    },
                    {
                        name: 'diaper-bag',
                        price: '40',
                        showD: false,
                        description: 'must have',
                        stock: '0',
                        soldOut: true,
                        canPurchase: true,
                        addToCart: false,
                        image: {src: './images/diaper-bag.jpg'}
                    }
                ];
            }
            
           
    });

    app.controller('StoreController', function ($scope,myFactory, $location, $log) {
        $scope.selectedProduct = 0;
        $log.info($location.path());
        $scope.products = myFactory.bou;
        $scope.itemsBought=myFactory.nathalie;
        $scope.selectedProduct = [{
            name: 'diaper-bag',
            price: '40',
            showD: false,
            color: "availablie in pink or blue",
            description: 'must have bag.Very practical,easy to carry, and can contain all you need for your precious one',
            releaseDate: "02/09/2016",
            stock: '0',
            soldOut: true,
            canPurchase: true,
            addToCart: false,
            image: {src: './images/diaper-bag.jpg'}
        }];



    });
})();

