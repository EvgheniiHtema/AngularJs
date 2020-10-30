(function () {
    'use strict';

    angular
        .module('app')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];
    function AboutController($scope) {
        $scope.change = 0;
		$scope.myFunc = function() {
			$scope.change++;
		};
    }

})();