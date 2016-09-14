/**
 * Created by Lawrence on 16/9/11.
 */
'use strict';

angular.
module('live').
component('live', {
    templateUrl: 'live/live.template.html',
    controller: function liveController() {
        var self = this;
        self.deviceList = [
            {
                deviceName: 'Test1',
                videoUrl: 'assets/movie.ogg'
            },
            {
                deviceName: 'Test2',
                videoUrl: 'assets/movie.ogg'
            }
        ];
        self.selected = self.deviceList[0];
    }
});