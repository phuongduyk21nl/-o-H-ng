var app = angular.module('app', [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider.when('/Main', {
		templateUrl : 'View(HTML)/Main.html'

	}).when('/Menu', {
		templateUrl : 'View(HTML)/Menu.html'
			
	}).when('/thethao', {
		templateUrl : 'View(HTML)/thethao.html'
			
	}).when('/thegioi', {
		templateUrl : 'View(HTML)/thegioi.html'
	});
});








/*
 // define controller
 app.controller('indexController', function($scope) {
 $scope.hello = 'Hello world!';

 var sub = ['Tư liệu', 'Phân tích', 'Người Việt 5 châu', 'Cuộc sống đó đây', 'Quân sự'];

 var thegioi = {id: 1, name: 'Thế giới', children: sub};
 var thethao = {id: 2, name: 'Thể thao', children: []};
 var phapluat = {id: 3, name: 'Pháp luật', children: []};
 var khoahoc = {id: 4, name: 'Khoa học', children: []};


 // create array.
 $scope.menus = [thegioi, thethao, phapluat, khoahoc];

 $scope.menus1 = [thegioi, thethao];
 // add more.
 $scope.menus1.push(phapluat);
 $scope.menus1.push(khoahoc);

 });
 */
