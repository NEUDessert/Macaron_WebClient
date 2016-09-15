/**
 * Created by Lawrence on 16/9/10.
 */
'use strict';

angular.
    module('list').
    component('list', {
        templateUrl: 'list/list.template.html',
        controller: function listController($http) {
            var self = this;
            self.devices = [
                {
                    deviceName: '[无设备]',
                    registerTime: '[无设备]',
                    deviceLocate: '[无设备]'
                }
            ];
            $http({
                method: 'POST',
                url: 'http://219.216.65.185:8082/user/getDevices.do',
                withCredentials: true
            }).success(function(data) {
                if(data.error != '1') {
                    self.devices = data;
                }
            });
        }
});