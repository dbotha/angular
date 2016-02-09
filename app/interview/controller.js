'use strict';

angular.module('myApp.interview', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/interview', {
            templateUrl: 'interview/view.html',
            controller: 'ViewController',
            controllerAs: "ctrl"
        });
    }])
    
    .controller('ViewController', [function() {
        var ctrl = this;
        ctrl.toggled = true;
    }]);