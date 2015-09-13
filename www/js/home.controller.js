'use strict';

angular.module('contadorApp')

.controller('HomeCtrl', ['$scope','$state', 
	function ($scope, $state){  

		$scope.amount = window.localStorage.getItem('amount');
		
		$scope.navigateTo = function (state) {
			$state.go(state);
		};

		$scope.toIncreaseCount = function () {
			
			console.log("Incremento contador...");	
			$scope.amount = parseInt($scope.amount) + 1;
			window.localStorage.setItem('amount', $scope.amount);
			
		};

		$scope.toRestartCount = function () {
			console.log("Reinicio contador...");
			$scope.amount = 0;			
			window.localStorage.setItem('amount', 0);
		};

		var _toCreateCount = function (name) {
			
			/*var selected = '';
			if($window.localStorage.getItem('selected')){
				selected = $window.localStorage.getItem('selected');
			}else{
				var def = {
					name: 'default',
					amount: 0
				};
				$window.localStorage.setItem('default',token);
				var selected = '';
			}*/
		};

		/*
			$window.localStorage.setItem('sessionToken',token);
            $window.localStorage.setItem('user',JSON.stringify(user));
            $window.localStorage.removeItem('sessionToken');
		*/

}]);