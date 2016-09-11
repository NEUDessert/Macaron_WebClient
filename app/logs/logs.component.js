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
            $http.get('url').then(function(response) {
                self.logs = response.data;
            });
        }
});