/**
 * Created by Lawrence on 16/9/10.
 */
'use strict';

angular.
    module('logs').
    component('logs', {
        templateUrl: 'logs/logs.template.html',
        controller: function logsController($http) {
            var self = this;
            self.logs = [
                // {
                //     alertId: '1',
                //     occurTime: '2016-01-01 12:01',
                //     deviceName: 'Test1',
                //     deviceLocate: 'B623',
                //     message: '燃气数据异常',
                //     isChecked: '1'
                // },
                // {
                //     alertId: '2',
                //     occurTime: '2016-01-01 12:01',
                //     deviceName: 'Test1',
                //     deviceLocate: 'B623',
                //     message: '燃气数据异常',
                //     isChecked: '2'
                // }
            ];
            $http({
                method: 'POST',
                url: 'http://192.168.50.197:8082/user/getLogs.do',
                withCredentials: true
            }).then(function(response) {
                if(response.data) {
                    self.logs = response.data;
                }
            });
            self.solve = function(log) {
                $http({
                    method: 'GET',
                    url: 'http://192.168.50.197:8082/user/logOperation.do?alertId=' + log.alertId + '&method=' + '1',
                    withCredentials: true
                })
                    .success(function(data) {
                        if(data.error == '0') {
                            log.isChecked = '1';
                        }
                    });
            };
            self.ignore = function(log) {
                $http({
                    method: 'GET',
                    url: 'http://192.168.50.197:8082/user/logOperation.do?alertId=' + log.alertId + '&method=' + '2',
                    withCredentials: true
                })
                    .success(function(data) {
                       if(data.error == '0') {
                           log.isChecked = '2';
                       }
                    });
            };
        }
});