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
                deviceName: 'Room_1',
                videoUrl: 'assets/movie.ogg'
            }
        ];
        self.selected = self.deviceList[0];
    }
});