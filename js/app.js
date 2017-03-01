(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	/**
	* 主module
	*
	* description
	*/
	//为应用程序创建一个模块，用来管理界面的结构
	var myApp = angular.module('app',['ngRoute','app.controllers.main']);
	//路由配置
	myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$locationProvider.hashPrefix('');
		$routeProvider
		.when('/:status?',{
			controller:'mainController',
			templateUrl:"main_template"
		})
		// .otherwise({
		// 	redirectTo:'/'
		// })
	}])

})(angular);

