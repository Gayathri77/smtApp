angular.module('shopMyTools.controllers', [])


  .controller('loginController', function ($scope, $state) {
    //  alert('ok');
    $scope.gotoRegistration = function () {
      $state.go('register');
    }

  })

  .controller('registrationController', function ($scope, $rootScope, loginService, $state) {
    //alert('ok');
    $scope.registerData = {};
    $scope.getOtp = function (data) {

      loginService.getOtp($scope, $rootScope).then(function (data) {
        alert(data.data.status);
      });

    }

    $scope.backtoLogin = function () {
       $state.go('login');
     // $state.go('app.home');
    }
  })


  .controller('menuController', function ($scope, $state) {

    marqueeInit({
      uniqueid: 'mycrawler',
      inc: 2, //speed - pixel increment for each iteration of this marquee's movement
      mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
      moveatleast: 2,
      neutral: 150,
      savedirection: true,
      random: true
    });

    $scope.gotoProductPage = function (category) {
      if (category == '1') {
        $state.go('login');
      } else if (category == '2') {
        $state.go('app.invoiceOrders');
      } else if (category == '3') {
        $state.go('app.myorders');
      } else if (category == '4') {
        $state.go('app.home');
      } 
    }


  });