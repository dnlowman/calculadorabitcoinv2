var app = require('../manager-module.js');

app.controller('foxbitcontroller', ['$scope','$http', function($scope, $http) {

    $http.get("app/services/orders_foxbit_services.php").then(function(response) {
      $scope.foxbitorders = response.data;
    });

    $http.jsonp("https://api.blinktrade.com/api/v1/BRL/trades?crypto_currency=BTC&callback=JSON_CALLBACK").then(function(response) {
      $scope.foxbittrades = response.data;
    });

  }]);
