'use strict';

angular.module('myApp.interview', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/interview', {
            templateUrl: 'interview/view.html',
            controller: 'ViewController',
            controllerAs: "ctrl"
        });
    }])

    .factory('todoList', [function() {
        var notes = [];
        var todoList = {
            getNotes: function() {
                return notes;
            },

            addNote: function(note) {
                notes.push(note);
            },

            removeNote: function(note) {
                var index = notes.indexOf(note);
                if (index >= 0) notes.splice(index, 1);

            }
        };

        return todoList;
    }])

    .controller('ViewController', ['todoList', function(todoList) {
        var ctrl = this;
        ctrl.notes = todoList.getNotes();

        ctrl.addNote = function(note) {
            todoList.addNote(note);
            ctrl.newNote = "";
        }

        ctrl.removeNote = function(note) {
            todoList.removeNote(note);
        }
    }]);