var app = angular.module("myApp", []);

app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('//').endSymbol('//');
    });

var update = function ($scope, $http) {
    console.log("fine");
    $scope.test = "OK";

    $http({
        method: 'POST',
        url: '/update',
    }).then(function (response) {
        var JSONData = response.data;
        $scope.msg = JSONData["speech"];
    }, function (error) {
        console.log(error);
    });
}

app.controller("updateCntrl", update);