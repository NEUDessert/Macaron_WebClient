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
                    alertId: '1',
                    occurTime: '2016-01-01 12:01',
                    deviceName: 'Test1',
                    deviceLocate: 'B623',
                    message: '燃气数据异常',
                    solved: false,
                    ignored: true
                }
            ];
            // $http.get('url').then(function(response) {
            //     self.logs = response.data;
            // });
            // self.solve = function(log) {
            //     $http({
            //         method: 'POST',
            //         url: '',
            //         data: '{alertId: ' + log.alertId + '}'
            //     })
            //         .success(function(data) {
            //             if(data.error == '0') {
            //                 log.solved = true;
            //             }
            //         });
            // }
        }
});