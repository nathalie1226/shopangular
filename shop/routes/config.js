
angular.module('myApp').config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/description', {
            templateUrl : '../partials/description.html',
            controller  : 'StoreController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});