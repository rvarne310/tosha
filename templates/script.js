var app = angular.module("myApp", []);

var update = function ($scope, $http) {
    console.log("fine");
    $http({
        method: 'POST',
        url: '/update',
    }).then(function (response) {
        var JSONData = response.data;
        $scope.msg = JSONData;
    }, function (error) {
        console.log(error);
    });
}

app.controller("updateCntrl", update);