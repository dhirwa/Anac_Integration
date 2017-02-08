var myapp = angular.module('AnacApp', ['ngRoute']);

myapp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/index.html'
    })
    .when('/signin', {
        templateUrl: '/sign-in.html'
    })
    .when('/signup', {
        templateUrl: '/sign-up.html'
    })
    .when('/apply', {
        templateUrl: '/applicant-form.html'
    })
    .when('/admin', {
        templateUrl: '/admin-form.html'
    })
    .otherwise({
        redirectTo: '/'
    })
}]);


myapp.controller('signinCtrl', ['$scope', '$http','$location', function($scope,$http,$location){
    $scope.sign_in = function(username, password){
        var config = {
			headers:{
				'Content-Type':'application/json'
			}
        }

        var data = '{"username":"'+username+'","password":"'+password+'"}';

        $http.post('http://0.0.0.0:8000/anac/login1/', data, config)
        .success(function(data, status, header, config){
           console.log(data);
            if(data.auth == 1){
                var store_id = storeUser(data.user.id);
                $location.path('/admin');
            }else{
                $scope.message = true;
            }
        });
    }

}]);



myapp.controller('signupCtrl',['$scope','$http','$location', function($scope,$http,$location){
  $scope.
	$scope.sign_up = function(firstname, lastname,email, password){
        console.log(Array(firstname, lastname,email, password));
        var config = {
			headers:{
				'Content-Type':'application/json'
			}
		}
        var data_user = '{"firstname":"'+firstname+'","lastname":"'+lastname+'","email":"'+email+'","password":"'+password+'"}';

        function addUser(data_user){
            $http.post('http://0.0.0.0:8000/anac/user_admin/', data_user, config)
            .success(function(data, status, header, config){
                console.log(data);
                if (data.auth){
                    $location.path('/signin');
                }
                else{
                    
                }
            });
          }
	      }
     }]);


myapp.controller('applicantCtrl',['$scope','$http','$location', function($scope,$http,$location){

     }])
