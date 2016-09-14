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
                // {
                //     deviceName: 'Test1',
                //     registerTime: '2016.1.1',
                //     deviceLocate: 'B623'
                // }
            ];
            $http({
                method: 'POST',
                url: 'http://192.168.50.197:8082/user/getDevices.do',
                withCredentials: true
            }).success(function(data) {
                if(data) {
                    self.devices = data;
                }
            });
        }
});