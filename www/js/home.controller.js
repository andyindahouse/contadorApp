'use strict';

angular.module('contadorApp')

.controller('HomeCtrl', ['$scope','$state', '$window', '$ionicPopup',
	function ($scope, $state, $window, $ionicPopup){  

		var self=this;

		$scope.amount = window.localStorage.getItem('amount');

		$scope.items = [{name:'Default',amount:435,selected:false},
						{name:'Coches rojos',amount:0,selected:false},
						{name:'Personas',amount:123,selected:false},
						{name:'Estornudos',amount:69,selected:true}]

		$scope.selected = {name: '', amount: 100}

		$scope.deleteOn = false;
		$scope.label = 'Borrar';
		
		$scope.navigateTo = function (state) {

			$state.go(state);
		};

		$scope.toIncreaseCount = function () {
			
			console.log("Incremento contador...");	
			$scope.amount = parseInt($scope.amount) + 1;
			$window.localStorage.setItem('amount', $scope.amount);		
		};

		$scope.toRestartCount = function () {
			console.log("Reinicio contador...");
			$scope.amount = 0;			
			$window.localStorage.setItem('amount', 0);
		};


		$scope.showConfirm = function() {
   			var confirmPopup = $ionicPopup.confirm({
     								title: 'Borrar contador',
     								template: '¿Estás seguro que deseas eliminar el contador?'});
   			confirmPopup
   			.then(function(res) {
     			if(res) {
       				console.log('You are sure');
     			} else {
       				console.log('You are not sure');
     			}
   			});
 };


		$scope.toChangeSelected = function (selected) {

			if($scope.deleteOn){

				
			}else{
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
			}			
		};

		var _deleteItem = function (item) {
			
		};

		var _selectItem = function (item) {
			
		};

		$scope.toChangeMod = function() {

			if($scope.deleteOn){
				$scope.deleteOn = false;
				$scope.label = 'Borrar';
			} else{
				$scope.label = 'Cancelar';
				$scope.deleteOn	= true;				
			}
		};								

		$scope.toDeleteSelected = function (selected) {

			


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