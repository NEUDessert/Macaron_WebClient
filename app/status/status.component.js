/**
 * Created by Lawrence on 16/9/10.
 */
'use strict';
angular.
    module('status').
    component('status', {
        templateUrl: 'status/status.template.html',
        controller: function statusController($http) {
            var self = this;
            self.statusList = [
                {
                    deviceName: '',
                    currentTemperature: '0',
                    currentHumidity: '0',
                    currentAirRate: '0',
                    unreadLogs: '0'
                }
            ];
            $http({
                method: 'POST',
                url: 'http://192.168.50.197:8082/user/getCurrentStatus.do',
                withCredentials: true
            })
                .success(function(data) {
                    console.log(data);
                   if(data) {
                       self.statusList = data;
                       self.selected = self.statusList[0];
                   }
                });
            self.selected = self.statusList[0];
        }
});