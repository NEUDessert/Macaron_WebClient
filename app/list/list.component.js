/**
 * Created by Lawrence on 16/9/10.
 */
'use strict';

angular.
    module('list').
    component('list', {
        templateUrl: 'list/list.template.html',
        controller: function listController($http, $route) {
            var self = this;
            self.devices = [
                {
                    deviceName: '[无设备]',
                    registerTime: '[无设备]',
                    deviceLocate: '[无设备]'
                }
            ];
            function getDeviceList() {
                $http({
                    method: 'POST',
                    url: 'http://dessert.reveur.me:8080/ManageServer/user/getDevices.do',
                    withCredentials: true
                }).success(function(data) {
                    if(data.error != '1') {
                        self.devices = data;
                    }
                });
            }
            getDeviceList();
            self.addDevice = function(location) {
                $http({
                    method: 'GET',
                    url: 'http://dessert.reveur.me:8080/ManageServer/user/addDevice.do?location=' + location,
                    withCredentials: true
                }).success(function(data) {
                    if(data.error == '0') {
                        alert('添加设备成功！');
                        getDeviceList();
                    } else {
                        alert('添加设备失败！');
                    }
                });
            };
            self.destroyDevice = function(deviceName) {
                $http({
                    method: 'GET',
                    url: 'http://dessert.reveur.me:8080/ManageServer/user/destroyDevice.do?deviceName=' + deviceName,
                    withCredentials: true
                }).success(function (data) {
                    if(data.error == '0') {
                        alert('删除设备成功！');
                        getDeviceList();
                        $route.reload();
                    } else {
                        alert('删除设备失败！');
                    }
                });
            };
        }
});