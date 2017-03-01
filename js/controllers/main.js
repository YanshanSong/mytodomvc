(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	/**
	* 主module
	*
	* description
	*/
	//创建一个独立的模块，将其注入到app模块中
	//或者取得app模块var app = module('app')再写控制器(但要先引入app.js)
	var controllers = angular.module('app.controllers.main',['app.services.main']);
	controllers.controller('mainController',[
		'$scope',
		'$routeParams',
		'$route',
		'mainService',
		function($scope,$routeParams,$route,mainService){
		//初始化模型
		//文本框需要一个模型，为了拿到文本输入的值
		$scope.text = '';

		//任务列表也需要一个模型
		//每一个任务的结构{ id:1, text: '学习', completed: true }
		$scope.todos = mainService.get()

		//处理增加
		$scope.add = function() {
			//参数校验 界面逻辑
			if(!scope.text) {
				return;
			}
			mainService.add($scope.text);
			$scope.text = ''  //清空文本框
		}

		//处理删除
		$scope.remove = function(id){
			//此处是界面逻辑
			mainService.remove(id)
		}

		//清空
		$scope.clear = mainService.existCompleted;

		//当前编辑元素，没有用到数据模型
		$scope.currentEditingId = -1;
		$scope.editing = function(id) {
			//界面逻辑
			$scope.currentEditingId = id;
		}
		$scope.save = function(id) {
			$scope.currentEditingId = -1;
		};

		$scope.toggleAll = mainService.toggleAll;

		//筛选(路由)
		$scope.selector = {};  // {} {completed:true} {completed:false}
		console.log($routeParams);
		var status = $routeParams.status;
		switch(status) {
			case 'active':
				$scope.selector = {completed:false};
				break;
			case 'completed':
				$scope.selector = {completed:true};
				break;
			default:
				$scope.selector = {};
				break;
		}
	
		//自定义比较函数
		//source:过滤器前的属性值，target:过滤器后的属性值
		$scope.equalCompare = function(source,target) {
			// console.log(source,target);
			return source == target;
		}
	}]);
})(angular);