angular.module('exampleApp', [])
    .controller('exampleController', function ($scope) {
        $scope.firstName = 'Sander';
        $scope.lastName = 'Rossel';
        $scope.fullName = function () {
            return $scope.firstName + ' ' + $scope.lastName;
        };
        
        $scope.favoriteMovies = [
            'Star Wars',
            'Lord of the Rings',
            'Fight Club'
        ];
        
        $scope.favoriteAlbums = [
            { artist: 'The Beatles', title: "Sgt. Pepper's Lonely Hearts Club Band" },
            { artist: 'Moby', title: 'Play' },
            { artist: 'The Prodigy', title: 'Fat Of The Land' }
        ];
        $scope.addAlbum = function () {
            $scope.favoriteAlbums.push({});
        };
        
        $scope.addColor = true;
        $scope.addUnderline = false;
        $scope.getClasses = function () {
            var classes = '';
            if ($scope.addColor) {
                classes += 'colored ';
            }
            if ($scope.addUnderline) {
                classes += 'underlined ';
            }
            return classes;
        };
        
        $scope.number = 42;
        $scope.date = new Date();
    });