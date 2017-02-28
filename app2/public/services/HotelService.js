miApp.service(
    "HotelsService",
    function($http, $q) {
        
        return ({
            getHotels: getHotels
        });

        // function getHotels() {
        //     console.log("dfsdf");
        //     return [
        //         { "name" : "Hotel Nuevo Boston", "stars" : 2, "price" : {"amount": 1118, "amountWithDiscount": 861, "discountPercentage":23, "taxes": true, "currency": "ARS"}, "paymentType": ["Pagá en cuotas"], gallery: ["public/static/images/hotel1.jpg", "public/static/images/hotel2.jpg", "public/static/images/hotel3.jpg"], "amenities":["bar", "pool","business","checkin", "coffee", "gym"], "mealPlan": "Solo la habitación" },
        //         { "name" : "Petit Palace San Bernardo", "stars" : 4, "price" : {"amount": 2145, "taxes": true, "currency": "ARS"}, "paymentType": ["Pagá en destino"], gallery: ["public/static/images/hotel1.jpg", "public/static/images/hotel2.jpg", "public/static/images/hotel3.jpg"], "amenities":["pool", "business","checkin", "cleaning", "wifi", "tv"], "mealPlan": "Solo la habitación" },
        //         { "name" : "Hotel Emperador", "stars" : 3, "price" : {"amount": 1596, "taxes": true, "currency": "ARS"}, "paymentType": ["Pagá en destino","Pagá en cuotas"], gallery: ["public/static/images/hotel1.jpg", "public/static/images/hotel2.jpg", "public/static/images/hotel3.jpg"], "amenities":["bar", "pool", "checkin", "coffee", "gym", "cleaning"], "mealPlan": "Solo la habitación"}
        //     ]
        // }   


        function getHotels() {
            var request = $http({
                method: "get",
                url: "api/hotel",
                params: {
                    action: "get"
                }
            });
            return (request.then(handleSuccess, handleError));
        }

        function handleError(response) {

            if (!angular.isObject(response.data) ||
                !response.data.message
            ) {
                return ($q.reject("An error occurred."));
            }

            return ($q.reject(response.data.message));
        }

        function handleSuccess(response) {
            return (response.data);
        }
});     
