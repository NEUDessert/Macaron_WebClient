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
                {
                    alertId: '0',
                    occurTime: '[无数据]',
                    deviceName: '[无数据]',
                    deviceLocate: '[无数据]',
                    message: '[无数据]',
                    isChecked: '-1'
                }
            ];
            $http({
                method: 'POST',
                url: 'http://dessert.reveur.me:8080/ManageServer/user/getLogs.do',
                withCredentials: true
            }).then(function(response) {
                // console.log(response.data);
                if(response.data.error != '1') {
                    self.logs = response.data;
                }
            });
            self.solve = function(log) {
                $http({
                    method: 'GET',
                    url: 'http://dessert.reveur.me:8080/ManageServer/user/logOperation.do?alertId=' + log.alertId + '&method=' + '1',
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
                    url: 'http://dessert.reveur.me:8080/ManageServer/user/logOperation.do?alertId=' + log.alertId + '&method=' + '2',
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