(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	/**
	* 主module
	*
	* description
	*/
	//创建一个独立的模块，将其注入到app模块中(html中先引入main.js再引入app.js)
	//或者先取得app模块var app = module('app')再写控制器(html中先引入app.js)
	var controllers = angular.module('app.controllers.main',['app.services.main']);
	controllers.controller('mainController',[
		'$scope',
		'$routeParams',
		'$route',
		'mainService',
		function($scope,$routeParams,$route,mainService){
		//---------------初始化模型-------------------
		//文本框需要一个模型，为了拿到文本输入的值
		$scope.text = '';

		//任务列表也需要一个模型
		//每一个任务的结构{ id:1, text: '学习', completed: true }
		$scope.todos = mainService.get()
		//---------------------------------------------

		//处理增加
		$scope.add = function() {
			//参数校验 界面逻辑
			if(!$scope.text) {
				return;
			}
			mainService.add($scope.text);
			$scope.text = '';  //清空文本框，界面逻辑
		}

		//处理删除
		$scope.remove = function(id){
			//此处是界面逻辑但并不存在界面逻辑
			//所以可以直接这样写
			//$scope.remove = mainService.remove(id)
			//但不建议这样写
			mainService.remove(id)
		}

		//清空已完成的任务
		//注意变量地址
		$scope.clearCompleted = function() {
			var newTodos = mainService.clearCompleted();
			$scope.todos = newTodos;
		}

      	//是否有已经完成的
      	$scope.existCompleted = mainService.existCompleted;

		//当前编辑元素，不存在数据交互
		$scope.currentEditingId = -1;
		//-1代表一个肯定不存在的元素，默认没有任何编辑
		$scope.editing = function(id) {
			//界面逻辑
			$scope.currentEditingId = id;
		}
		$scope.save = function(id) {
			$scope.currentEditingId = -1;
		};

		$scope.toggleAll = mainService.toggleAll;

		$scope.toggle = function() {
			mainService.save()
		}

		//筛选(路由)，无数据交互
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