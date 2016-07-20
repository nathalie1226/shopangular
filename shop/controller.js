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

    

    app.controller('StoreController', function ($scope,$location, $log) {
        $scope.selectedProduct = 0;
        $log.info($location.path());
        $scope.products = [{
            name: 'diapers',
            id:1,
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
                id:2,
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
                id:3,
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
                id:4,
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
                id:5,
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
                id:6,
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
                id:7,
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
                id:8,
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
                id:9,
                showD: false,
                description: 'must have',
                stock: '0',
                soldOut: true,
                canPurchase: true,
                addToCart: false,
                image: {src: './images/diaper-bag.jpg'}
            }
        ];
        $scope.selectedProduct = $scope.filter(function(item){
            return item.id===$scope.products.id;
        });
        
        $scope.showMe = false;

        // $scope.showDescription = function($event){
        //     $scope.showMe = !$scope.showMe;
        //     console.log($event.target);
        //
        // };


        $scope.itemsBought = 0;
        $scope.productsBought = [{ name: 'diaper-bag',
            price: '40',
            description:'cool',
            image: {src: './images/diaper-bag.jpg'}
        }];
        
        $scope.addProduct = function (product) {
            $scope.productsBought.push({
                name: product.name, price: product.price,
                description: product.description, image: {src: 'product.image.src'}
            });
            $scope.itemsBought++;
            console.log($scope.productsBought);
        };


        // $scope.addItem = function () {
        //     $scope.selectedProduct.push({
        //         name: 'diaper-bag',
        //         price: '40',
        //         showD: false,
        //         color: "availablie in pink or blue",
        //         description: 'must have bag.Very practical,easy to carry, and can contain all you need for your precious one',
        //         releaseDate: "02/09/2016",
        //         stock: '0',
        //         soldOut: true,
        //         canPurchase: true,
        //         addToCart: false,
        //         image: {src: './images/diaper-bag.jpg'}
        //     });
        // };

        // $scope.removeItem = function (index) {
        //     $scope.invoice.splice(index, 1);
        // };
        //
        // $scope.total = function () {
        //     var total = 0;
        //     angular.forEach($scope.invoice, function (item) {
        //         total += item.qty * item.cost;
        //     });
        //
        //     return total;
        // };


    });
})();

