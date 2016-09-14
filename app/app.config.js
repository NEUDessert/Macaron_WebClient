'use strict';

// Declare app level module which depends on views, and components
angular.module('Macaron_WebClient').
    config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/', {template: '<basic-info></basic-info>'}).
            when('/basic-info', {template: '<basic-info></basic-info>'}).
            when('/status', {template: '<status></status>'}).
            when('/list', {template: '<list></list>'}).
            when('/logs', {template: '<logs></logs>'}).
            when('/live', {template: '<live></live>'}).
            otherwise('/basic-info');
    }
])
    .controller('loginCheckController', function loginCheckController($http, $scope, $location) {
        $scope.username = 'Guest';
        $http({
            method: 'POST',
            url: 'http://192.168.50.197:8082/user/getUsername.do',
            withCredentials: true
        })
            .success(function(data) {
                if(data.error == '0') {
                    console.log('username: ' + data.username);
                    $scope.username = data.username;
                } else {
                    console.log(data);
                    window.location.href = 'login.html';
                }
            });
    })
    .controller('navController', function navController($scope, $location) {

        $scope.navItems = [
            {
                name: 'basic-info',
                title: '基本信息',
                href: '#!/basic-info',
                location: "/basic-info",
                icon: 'uk-icon-info-circle uk-icon-justify'
            },
            {
                name: 'status',
                title: '实时状态',
                href: '#!/status',
                location: "/status",
                icon: 'uk-icon-area-chart uk-icon-justify'
            },
            {
                name: 'list',
                title: '设备列表',
                href: '#!/list',
                location: "/list",
                icon: 'uk-icon-table uk-icon-justify'
            },
            {
                name: 'logs',
                title: '日志信息',
                href: '#!/logs',
                location: '/logs',
                icon: 'uk-icon-tasks uk-icon-justify'
            },
            {
                name: 'live',
                title: '实时监控',
                href: '#!/live',
                location: '/live',
                icon: 'uk-icon-video-camera uk-icon-justify'
            },

        ];
        $scope.selectedItem = "basic-info";
        $scope.navClick = function (itemName) {
            $scope.selectedItem = itemName;
        };
        var currentLocation = $location.path();
        for(var navItem in $scope.navItems) {
            if(navItem.location == currentLocation) {
                $scope.selectedItem = navItem.name;
            }
        }
    });