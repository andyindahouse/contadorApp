'use strict';

angular.module('contadorApp')

.controller('ListCtrl', ['$scope','$state', '$window', '$ionicPopup',
	function ($scope, $state, $window, $ionicPopup){  

		$scope.items = JSON.parse($window.localStorage.getItem('items'));
		$scope.selected = $scope.items[$window.localStorage.getItem('selected')];
		$scope.deleteOn = false;
		$scope.label = 'Borrar';	

		$scope.navigateTo = function (state) {

			$state.go(state);
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

			if(!$scope.deleteOn){
							
				$window.localStorage.setItem('selected', selected.name);
				$scope.selected = $scope.items[$window.localStorage.getItem('selected')];
				$apply();
			}			
		};

		var _deleteItem = function (item) {
			
		};

		$scope.createItem = function () {

			$scope.item = {
				name: '',
				amount: 0
			};

			var myPopup = $ionicPopup.show({				
			    template: '<input type="text" ng-model="item.name">',
			    title: 'Escribe el nombre del contador',
			    subTitle: 'No puedes repetir nombres de contadores',
			    scope: $scope,
			    buttons: [
			      { text: 'Cancelar' },
			      {
			        text: '<b>Guardar</b>',
			        type: 'button-positive',
			        onTap: function(e) {
			          if (!$scope.item.name) {
			            //don't allow the user to close unless he enters wifi password
			            e.preventDefault();
			          } else {
			          	if($window.localStorage.getItem($scope.item.name)) {			          		
			          		e.preventDefault();
			          	}
			            return $scope.item.name;
			          }
			        }
			      }
			    ]
			  });

			  myPopup

			  .then(function(res) {	
			  	$scope.items[$scope.item.name] = $scope.item;
			  	$window.localStorage.setItem('items', JSON.stringify($scope.items));
			  });

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

}]);