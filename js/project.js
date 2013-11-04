angular.module('comfortvest',[]).
	config(function($routeProvider){
		$routeProvider.
			when('/', {controller:indexCtrl, templateUrl:'views/home.html'}).
			when('/products', {controller:productCtrl, templateUrl:'views/products.html'}).
			when('/about', {controller:aboutCtrl, templateUrl:'views/about.html'}).
			when('/contact', {controller:contactCtrl, templateUrl:'views/contact.php'}).
			otherwise({redirectTo:'/'});
	});

function indexCtrl($scope){
	
}

function productCtrl($scope){
	
}

function aboutCtrl($scope){
	
}

function contactCtrl($scope){
	
}

$(document).ready(function(){
	var left = $(window).width();
	$('.trianglewrap').css({'left':'75px'});

});