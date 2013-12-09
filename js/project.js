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
		$('.triangewrap').animate({'left':'28px'});
		//clearUnderlines($(this));
	});
	$('.products').click(function(){
		$('.triangewrap').animate({'left':'195px'});
		//clearUnderlines($(this));
	});
	$('.about').click(function(){
		$('.triangewrap').animate({'left':'374px'});
		//clearUnderlines($(this));
	});
	$('.contact').click(function(){
		$('.triangewrap').animate({'left':'545px'});
		//clearUnderlines($(this));
	});
	
	//viewport height fixer
	var viewportHeight = ($( document ).height() - 87 ) + 'px';
	//$('.viewWrap').css({'height':viewportHeight});
});

function clearUnderlines(exception){
	$('nav ul li a').css({'border-bottom':'0px #222222 solid'});
	$(exception).css({'border-bottom':'1px #222222 solid'});

}