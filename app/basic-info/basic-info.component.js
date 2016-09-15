/**
 * Created by Lawrence on 16/9/10.
 */
'use strict';

angular.
    module('basicInfo').
    component('basicInfo', {
    templateUrl: 'basic-info/basic-info.template.html',
    controller: function basicInfoController($http) {
        var self = this;
        self.basicInfo = {
            total: '0',
            online: '0',
            offline: '0',
            unread: '0'
        };
        $http({
            method: 'POST',
            url: 'http://219.216.65.185:8082/user/getBasicInfo.do',
            withCredentials: true
        })
            .success(function (data) {
                // console.log(data);
                if(data.error != '1') {
                    self.basicInfo = data;
                }
            });
    }
});