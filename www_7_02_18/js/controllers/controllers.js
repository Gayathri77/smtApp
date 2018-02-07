angular.module('shopMyTools.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  // marqueeInit({
  //   uniqueid: 'mycrawler',
  //   style: {
  //     'padding': '5px',
  //     'width': '450px',
  //     'background': 'lightyellow',
  //     'border': '1px solid #CC3300'
  //   },
  //   inc: 5, //speed - pixel increment for each iteration of this marquee's movement
  //   mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
  //   moveatleast: 2,
  //   neutral: 150,
  //   persist: true,
  //   savedirection: true
  // });

  // $scope.swiperOptions = {
  //   effect: 'slide',
  //   initialSlide: 0,

  //   onInit: function(swiper){
  //     $scope.swiper = swiper;

  //   },
  //   onSlideChangeEnd: function(swiper){
  //     console.log('The active index is' + swiper.activeIndex);
  //   }
  // };
  

  
  // <script type="text/javascript">
  marqueeInit({
    uniqueid: 'mycrawler',
    inc: 1, //speed - pixel increment for each iteration of this marquee's movement
    mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
    moveatleast: 1,
    neutral: 1,
    // persist: true,
    savedirection: true,
    random: true
  });

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


