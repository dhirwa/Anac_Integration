var myapp = angular.module('AnacApp', ['ngRoute']);

myapp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'Views/index.html'
    })
    .when('/signin', {
        templateUrl: 'Views/sign-in.html'
    })
    .when('/signup', {
        templateUrl: 'Views/sign-up.html'
    })
    .when('/apply', {
        templateUrl: 'Views/applicant-form.html'
    })
    .when('/admin', {
        templateUrl: 'Views/admin-form.html'
    })
    .otherwise({
        redirectTo: '/'
    })

}]);


myapp.controller('signupCtrl', ['$scope','$http','$location', function($scope,$http,$location){
    $scope.message=false;
    $scope.signnup = function(first_name,last_name,email,password){
        var config={
          headers:{
            'Content-Type':'application/json'
          }
        }
        var data_user='{"first_name":"'+first_name+'","last_name":"'+last_name+'","email":"'+email+'","password":"'+password+'"}';

        $http.post('http://0.0.0.0:8000/anac/user_admin/',data_user, config)
              .success(function(data, status, header, config){
                 console.log(data);
                         if (data.auth == 1){
                             $location.path('/signin');
                         }
                         else{
                           $scope.message=true;
                         }
                     });
                   }
              }]);

myapp.controller('signinCtrl', ['$scope', '$http','$location', function($scope,$http,$location){
    $scope.message = false;
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
                //var store_id = storeUser(data.user.id);
                $location.path('/admin');
            }else{
                $scope.message = true;
            }
        });
    }

}]);

myapp.controller('applicantCtrl',['$window','$scope','$http','$location', function($window,$scope,$http,$location){


















// NEXT & PRECEDENTS

    $scope.tonext1 = function(){
      var x = document.getElementById('formulaire1');
      var y = document.getElementById('formulaire2');
      x.style.display = 'none';
      y.style.display = 'block';
    };
    $scope.tonext2 = function(){
      var x = document.getElementById('formulaire2');
      var y = document.getElementById('formulaire3');
      x.style.display = 'none';
      y.style.display = 'block';
    };
    $scope.precedent2 = function(){
      var x = document.getElementById('formulaire1');
      var y = document.getElementById('formulaire2');
      y.style.display = 'none';
      x.style.display = 'block';
    };
    $scope.tonext3 = function(){
      var x = document.getElementById('formulaire3');
      var y = document.getElementById('formulaire4');
      x.style.display = 'none';
      y.style.display = 'block';
    };
    $scope.precedent3 = function(){
      var x = document.getElementById('formulaire3');
      var y = document.getElementById('formulaire2');
      x.style.display = 'none';
      y.style.display = 'block';
    };
    /*$scope.tonext4 = function(){
      var x = document.getElementById('formulaire3');
      var y = document.getElementById('formulaire4');
      x.style.display = 'none';
      y.style.display = 'block';
    };*/
    $scope.precedent4 = function(){
      var x = document.getElementById('formulaire3');
      var y = document.getElementById('formulaire4');
      y.style.display = 'none';
      x.style.display = 'block';
    };

    //DETENEZ VOUS?
    $("#switch1").click(function() {
      if($(this).is(":checked")) {
          $("#form3,.applicant-button3").show();
      } else {
          $("#form3").hide();
      }
    });

    //SHOW ENTRIES IN TABLE.
    $scope.sauvegarder = function(){
      $(".anac-background,.profile-name").hide();
      $("#table-display").show();
    };

    //BASIS OF:

    $("#test1").click(function() {
      if($(this).is(":checked")) {
          $("#date-license-A").show();
      } else {
          $("#date-license-A").hide();
      }
    });

    $("#test2").click(function() {
      if($(this).is(":checked")) {
          $("#date-license-b").show();
      } else {
          $("#date-license-b").hide();
      }
    });

    $("#test3").click(function() {
      if($(this).is(":checked")) {
          $("#date-license-c").show();
      } else {
          $("#date-license-c").hide();
      }
    });

    $("#test4").click(function() {
      if($(this).is(":checked")) {
          $("#date-license-d").show();
      } else {
          $("#date-license-d").hide();
      }
    });

    $("#test5").click(function() {
      if($(this).is(":checked")) {
          $("#date-license-e").show();
      } else {
          $("#date-license-e").hide();
      }
    });
  //ENVOYER
  $scope.envoyer = function(){
    var x = document.getElementById('table-display');
    var y = document.getElementById('successfull');
    var z = document.getElementById("sauvegarder");
    var a = document.getElementById("annuler");
    var b = document.getElementById("button6-preview");

    x.style.display = 'none';
    y.style.display = 'block';
    z.style.display = 'none';
    a.style.display = 'none';
    b.style.display = 'none';
  }

}]);


















myapp.controller('adminCtrl',['$scope','$http','$location', function($scope,$http,$location){

      $scope.nextAdmin1 = function(){
        $("#formulaire-admin1").hide();
        $("#formulaire-admin2").show();
      };

      $scope.nextAdmin2 = function(){
        $("#formulaire-admin2").hide();
        $("#formulaire-admin3").show();
      };

      $scope.nextAdmin3 = function(){
        $("#formulaire-admin3").hide();
        $("#formulaire-admin4").show();
      };

      $scope.nextAdmin4 = function(){
        $("#formulaire-admin4").hide();
        $("#formulaire-admin5").show();
      };

      $scope.nextAdmin5 = function(){
        $("#formulaire-admin5").hide();
        $("#formulaire-admin6").show();
      };

      $scope.prevAdmin1 = function(){
        $("#formulaire-admin2").hide();
        $("#formulaire-admin1").show();
      };

      $scope.prevAdmin2 = function(){
        $("#formulaire-admin3").hide();
        $("#formulaire-admin2").show();
      };

      $scope.prevAdmin3 = function(){
        $("#formulaire-admin4").hide();
        $("#formulaire-admin3").show();
      };

      $scope.prevAdmin4 = function(){
        $("#formulaire-admin5").hide();
        $("#formulaire-admin4").show();
      };

      $scope.prevAdmin5 = function(){
        $("#formulaire-admin6").hide();
        $("#formulaire-admin5").show();
      };
}]);
