define(['auth/module'], function (module) {
	'use strict';

	module.registerController('RegisterCtrl', ['$mdToast', '$scope', '$state', function ($mdToast, $scope, $state) {
		
		$scope.user = {};
		$scope.user.gender = 1;

		$scope.register = function () {
			console.log($scope.user);
		}
	}]);
})