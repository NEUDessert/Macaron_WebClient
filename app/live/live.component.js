/**
 * Created by Lawrence on 16/9/11.
 */
'use strict';

angular.
module('live').
component('live', {
    templateUrl: 'live/live.template.html',
    controller: function liveController($http) {
        var self = this;
        self.deviceList = [
            {
                deviceName: '[无设备]',
                currentTemperature: '0',
                currentHumidity: '0',
                currentAirRate: '0',
                unreadLogs: '0'
            }
        ];
        self.selected = self.deviceList[0];
        $http({
            method: 'POST',
            url: 'http://dessert.reveur.me:8080/ManageServer/user/getCurrentStatus.do',
            withCredentials: true
        })
            .success(function(data) {
                console.log(data);
                if(data.error != '1') {
                    self.deviceList = data;
                    self.selected = self.deviceList[0]
                }
            });
    }
});