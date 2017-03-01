(function(angular){
	//注册一个新模块，作为服务模块
	//将该模块注入controllers下的模块
	 angular.module('app.service.main',[])
	 .service('mainService',[function() {
	 	//业务逻辑都必须出现在服务中(专门定义业务逻辑)
	 	//添加todo
	 	var todos = [
		{ id : 0.01, text : '学习', completed : false},
		{ id : 0.02, text : '睡觉', completed : false},
		{ id : 0.03, text : '打豆豆', completed : true}
		];

		this.add = function(text) {
			todos.push({
				//自动增长
				id : getId(),
				// 由于$scope默认是双向绑定的，add的同时肯定可以拿到界面上
				// 的输入值
				text : text,
				completed : false
			});
			//清除模型数据--->清除文本框
			text = '';
		};

		//删除
		this.remove = function(id) {
			//删除谁
			for (var i = 0,len = todos.length; i < len; i++) {
				if(todos[i].id === id) {
					todos.splice(i,1);
					break;
				}
			}
		};

		//清空
		this.clear = function() {
			var result = [];
			for (var i = 0; i < todos.length; i++) {
				if(!todos[i].completed) {
					result.push(todos[i]);
				}
			}
			todos = result
		};

		//是否已经有完成的
		//若ng-show绑定函数，该函数必须返回布尔值
		this.existCompleted = function() {
			for (var i = 0, len = todos.length; i < len; i++) {
				if(todos[i].completed){
					return true;
				}
			}
			return false;
		};

		//更新
		// this.update = function(id , target) {

		// }

		var now = true;
		this.toggleAll = function(){
			for (var i = 0; i < todos.length; i++) {
				todos[i].completed = now;
			}
			now = !now;
		};

		//控制私有字段的访问权限
		this.get = function() {
			return todos;
		}
		
		//完美处理id，但效率低
		function getId(){
			var id = Math.random();
			for (var i = 0, len = todos.length; i < len; i++) {
				if(todos[i].id === id){
					id = getId();
					break;
				}
			}
			return id;
		}
	 }])
})(angular)