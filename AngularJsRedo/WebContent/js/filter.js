var myApp = angular.module('fapp',[]);

myApp.controller('ctrl1',function($scope){
		$scope.products=[
			{"name":"milk","price":2.78,"quantity":10,"soldOut":false},
			{"name":"bread","price":3.49,"quantity":20,"soldOut":false},
			{"name":"eggs","price":5.60,"quantity":12,"soldOut":false},
			{"name":"bacon","price":4.90,"quantity":0,"soldOut":true},
			{"name":"pancakes","price":1.99,"quantity":45,"soldOut":false}
		];
});

myApp.filter('addS',function(){
	//make a function, input will be passed as parameter
	var my_func = function(input){
		//make changes and return variable
		return input+'s';
	};
	//once done return the function you made
	return my_func;
});

myApp.filter("baconise",function(){
	//shorthand for doing above
	return function(input){
		return "bacon";
	};
});