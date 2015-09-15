'use strict';

angular.module('contadorApp')

.controller('HomeCtrl', ['$scope','$state', 
	function ($scope, $state){  

		$scope.amount = window.localStorage.getItem('amount');

		$scope.items = [{name:'Default',amount:435,selected:false},
						{name:'Coches rojos',amount:0,selected:false},
						{name:'Personas',amount:123,selected:false},
						{name:'Estornudos',amount:69,selected:true}]

		$scope.selected = {name: '', amount: 100}
		
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

		$scope.toChangeSelected = function (selected) {
			var item = {};
			for (var i = 0; i<$scope.items.length; i++) {
				item = $scope.items[i];	
				if(item.name === selected.name){
					item.selected = true;
				}else{
					item.selected = false;	
				}							
			};

			selected.selected=true;
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