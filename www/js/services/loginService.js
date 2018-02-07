angular.module('shopMyTools.services', [])



    .service('loginService', function ($q, $http) {

        this.getOtp = function ($scope, $rootScope) {
            alert('ok');
            var deferred = $q.defer();
            var data = angular.toJson($scope.registerData);

            $http.post("http://157.119.108.135:8005/userregistration", data)
                .then(function success(data) {
                    deferred.resolve(data);

                }, function error(data) {
                    deferred.reject(data);

                });

            return deferred.promise;
        };

    })
