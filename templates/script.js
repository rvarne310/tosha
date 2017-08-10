var app = angular.module("myApp", []);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('//').endSymbol('//');
});

var showTrackDetails = function ($rootScope, $scope, $http) {

    $rootScope.show = false;
    $scope.showDetailsClicked = function () {
        console.log("ok");
        $http({
            method: 'POST',
            url: '/update',
        }).then(function (response) {
            var JSONData = response.data;
            $scope.msg = JSONData["speech"];
            if ($scope.msg == "Sample speech") {
                $rootScope.show = true;
            }
        }, function (error) {
            console.log(error);
        });
    }
}

app.controller("showTrackDetails", showTrackDetails);