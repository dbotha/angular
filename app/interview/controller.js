'use strict';

angular.module('myApp.interview', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/interview', {
            templateUrl: 'interview/view.html',
            controller: 'ViewController',
            controllerAs: "ctrl"
        });
    }])

    .directive("interviewToggleButton", function() {
        return {
            controller: ["$scope", function($scope) {
                this.toggled = $scope.toggled;
            }],
            controllerAs: "ctrl",
            scope: {
                toggled: "="
            },
            templateUrl: 'interview/toggle_button_view.html'
        };
    })

    .controller('ViewController', [function() {
        var ctrl = this;
        ctrl.toggled = true;
    }]);