(function(angular) {
  //注册一个新模块
  angular.module('app.services.main',[])
    .service('mainService',['$window',function($window) {
        // var todos = [
        // { id : 0.01, text : '学习', completed : false},
        // { id : 0.02, text : '睡觉', completed : false},
        // { id : 0.03, text : '打豆豆', completed : true}
        // ]; 
        var storage = $window.localStorage;
        console.log(storage['mytodoList']);
        var todos = storage['mytodoList'] ? JSON.parse(storage['mytodoList']) : [];
        console.log(todos);

        //当todos发生改变时，执行save()
        this.save = function() {
            storage['mytodoList'] = JSON.stringify(todos);
        }

        // 获取唯一ID
        function getId() {
            var id = Math.random(); // 1 2
            for (var i = 0; i < todos.length; i++) {
              if (todos[i].id === id) {
                id = getId();
                break;
              }
            }
            return id;
        }

        //控制私有字段的访问权限
        //todos放外面--->更可控
        this.get = function(){
            return todos;
        }

        //业务逻辑都必须出现在服务中(专门定义业务逻辑)
        this.add = function(text) {
            todos.push({
              // 自动增长？
              id: getId(),
              // 由于$scope.text是双向绑定的，add同时肯定可以同他拿到界面上的输入
              text: text,
              completed: false
            });
            this.save(todos);
        };

        //处理删除
        this.remove = function(id) {
            for (var i = 0; i < todos.length; i++) {
              if (todos[i].id === id) {
                todos.splice(i, 1);
                break;
              }
            }
            this.save(todos);
        };
        
        //清空已完成的
        this.clearCompleted = function() {
            var result = [];
            for (var i = 0; i < todos.length; i++) {
              if (!todos[i].completed) {
                result.push(todos[i]);
              }
            }
            todos = result;
            //此时todos指向了一个新的地址
            //$scope.todos 与 todos 不再共享一个地址
            //即$scope.todos并没发生改变
            this.save(todos);
            return todos;
        }

        // 是否有已经完成的
        this.existCompleted = function() {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].completed) {
                return true;
            }
          }
          return false;
        };

        
        //toggleAll开关
        var now = true;
        this.toggleAll = function() {
        for (var i = 0; i < todos.length; i++) {
            todos[i].completed = now;    //数据交互，业务逻辑
          }   
            now = !now;
            this.save(todos)
        };
    }]);
})(angular);
	 	

	 	