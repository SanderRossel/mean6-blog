angular.module('ajaxApp', [])
    .controller('ajaxController', function ($scope, $http) {
        $scope.newAuthor = null;
        $scope.newTitle = null;
        $scope.books = [];
        $scope.getBooks = function () {
            $http.get('http://localhost/books')
            .then(function (response) {
                $scope.books = response.data;
            }, function (response) {
                alert('Something went wrong while getting the books!');
            });
        };
        $scope.addBook = function () {
            $http.post('http://localhost/addBook', { author: $scope.newAuthor, title: $scope.newTitle })
            .then(function (response) {
                $scope.newAuthor = null;
                $scope.newTitle = null;
                $scope.books = response.data;
            }, function (response) {
                alert('Something went wrong while adding a new book!');
            });
        };
    });