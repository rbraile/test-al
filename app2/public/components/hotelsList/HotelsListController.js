miApp.controller('HotelsListController', function($scope, HotelsService, $location) {

    angular.element(document).ready(function () {
        $( "#slider-range" ).slider({
            range: true,
            min: 750,
            max: 1800,
            values: [ 780, 1763 ],
            slide: function( event, ui ) {
                $(".price-b").text('$' + ui.values[0]);
                $(".price-a").text('$' + ui.values[1]);
            }
        });
        $(".price-b").text('$' + $("#slider-range").slider( "values", 0 ));
        $(".price-a").text('$' + $("#slider-range").slider( "values", 1 ));
    });

    $scope.hotels = [];

    $scope.range = function(min, max, step) {
        min = parseInt(min);
        max = parseInt(max);
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };

    function loadData() {
        HotelsService.getHotels()
            .then(
                function(response) {
                    $scope.hotels = response.hotels;
                    console.log($scope.hotels);
                }
            );

        //descomentar en caso de no tener base de datos mongo
        // $scope.hotels = [
        //         { "name" : "Hotel Nuevo Boston", "stars" : 2, "price" : {"amount": 1118, "amountWithDiscount": 861, "discountPercentage":23, "taxes": true, "currency": "ARS"}, "paymentType": ["Pagá en cuotas"], gallery: ["public/static/images/hotel1.jpg", "public/static/images/hotel2.jpg", "public/static/images/hotel3.jpg"], "amenities":["bar", "pool","business","checkin", "coffee", "gym"], "mealPlan": "Solo la habitación" },
        //         { "name" : "Petit Palace San Bernardo", "stars" : 4, "price" : {"amount": 2145, "taxes": true, "currency": "ARS"}, "paymentType": ["Pagá en destino"], gallery: ["public/static/images/hotel1.jpg", "public/static/images/hotel2.jpg", "public/static/images/hotel3.jpg"], "amenities":["pool", "business","checkin", "cleaning", "wifi", "tv"], "mealPlan": "Solo la habitación" },
        //         { "name" : "Hotel Emperador", "stars" : 3, "price" : {"amount": 1596, "taxes": true, "currency": "ARS"}, "paymentType": ["Pagá en destino","Pagá en cuotas"], gallery: ["public/static/images/hotel1.jpg", "public/static/images/hotel2.jpg", "public/static/images/hotel3.jpg"], "amenities":["bar", "pool", "checkin", "coffee", "gym", "cleaning"], "mealPlan": "Solo la habitación"}
        //     ]
    }

    loadData();

})
