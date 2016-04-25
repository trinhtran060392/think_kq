define(['auth/module'], function (module) {
	'use strict';

	module.registerController('LoginCtrl', ['$mdToast', '$scope', '$state', function ($mdToast, $scope, $state) {
		
		$scope.user = {};
		$scope.user.type = 1;

		$scope.login = function () {
			console.log($scope.user);
		}
	}]);
})