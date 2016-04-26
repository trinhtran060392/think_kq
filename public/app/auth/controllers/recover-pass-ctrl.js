define(['auth/module'], function (module) {
	'use strict';

	module.registerController('RecoverCtrl', ['$mdToast', '$scope', '$state', function ($mdToast, $scope, $state) {
		
		$scope.user = {};
		$scope.user.type = 1;

		$scope.send = function () {
			console.log($scope.user);
		}
	}]);
})