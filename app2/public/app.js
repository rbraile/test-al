var miApp = angular.module('miApp', ['ngRoute']);//dependencias(modulo del cdn)

miApp.config(function($routeProvider) { // se ejecuta antes de cargar la aplicacion
    $routeProvider
        .when('/', {
            controller: 'HotelsListController',
            templateUrl: 'public/components/hotelsList/hotels-list.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
