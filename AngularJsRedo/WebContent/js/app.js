var myApp = angular.module('fapp',[]);

myApp.controller('ctrl1',function($scope){
	$scope.x = true;
	$scope.chan = function(){
		$scope.x=false;
	};
});
