/**
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('frontAngleApp', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {templateUrl: "home.html", controller: "PageCtrl"})
        // Pages

        .when("/home", {templateUrl: "home.html", controller: "PageCtrl"})
        .when("/codesamples", {templateUrl: "partials/codesamples.html", controller: "PageCtrl"})
        .when("/api", {templateUrl: "api.html", controller: "PageCtrl"})
        .when("/screenshots", {templateUrl: "partials/screenshots.html", controller: "PageCtrl"})

        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


app.controller('TabCtrl', function ($scope, $location, $http) {

    var mainInfo = null;
    $http.get('partials/samples.json').success(function(data) {
        mainInfo = data;
        $scope.tabs = data.samples;
            // alert('mainInfo : ' + mainInfo)
    });


    //
    //
    // $scope.tabs = [{
    //
    //     title: 'one',
    //     url: 'partials/1.html'
    // }, {
    //     title: 'two',
    //     url: 'partials/2.html'
    //
    // }, {
    //     title: 'three',
    //     url: 'partials/3.html'
    // }];


    $scope.currentTab = 'partials/1.html'
    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function (tabUrl) {
        return tabUrl == $scope.currentTab;
    }


});


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope, $location, $http) {

    $scope.click = function ($event, position) {


        t = $(".item");

        t.removeClass('clicked');

        t2 = $($event.currentTarget);

        $(t2).fadeIn(70000, function () {
            $(this).addClass('clicked');
        });
    };


    $scope.hoverIn = function ($event) {

        t = $(".hover");

        t.removeClass('hover');

        // t = $(".item");

        angular.element($event.target).addClass('hover');
    };

    $scope.hoverOut = function ($event) {
        t = $(".item");

        t.removeClass('hover');

        // angular.element($event.target).removeClass('hover')
    };
});