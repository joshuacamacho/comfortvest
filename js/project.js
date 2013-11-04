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
	//Nav bar animations
	$('.home').click(function(){
		$('.triangewrap').animate({'left':'52px'});
	});
	$('.products').click(function(){
		$('.triangewrap').animate({'left':'228px'});
	});
	$('.about').click(function(){
		$('.triangewrap').animate({'left':'417px'});
	});
	$('.contact').click(function(){
		$('.triangewrap').animate({'left':'594px'});
	});
	
	
});