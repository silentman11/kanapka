(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var ReactiveCountdown;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/flyandi_reactive-countdown/packages/flyandi_reactive-countdown.js                                   //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
(function () {                                                                                                  // 1
                                                                                                                // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                       //     // 4
// packages/flyandi:reactive-countdown/ReactiveCountdown.js                                              //     // 5
//                                                                                                       //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                         //     // 8
/**                                                                                                      // 1   // 9
 * flyandi:reactivecountdown                                                                             // 2   // 10
 * A simple reactive countdown timer library                                                             // 3   // 11
 * @version: v0.0.1                                                                                      // 4   // 12
 * @author: Andy Schwarz                                                                                 // 5   // 13
 *                                                                                                       // 6   // 14
 * Created by Andy Schwarz. Please report any bug at http://github.com/flyandi/meteor-reactive-countdown // 7   // 15
 *                                                                                                       // 8   // 16
 * Copyright (c) 2015 Andy Schwarz http://github.com/flyandi                                             // 9   // 17
 *                                                                                                       // 10  // 18
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)                                  // 11  // 19
 *                                                                                                       // 12  // 20
 * Permission is hereby granted, free of charge, to any person                                           // 13  // 21
 * obtaining a copy of this software and associated documentation                                        // 14  // 22
 * files (the "Software"), to deal in the Software without                                               // 15  // 23
 * restriction, including without limitation the rights to use,                                          // 16  // 24
 * copy, modify, merge, publish, distribute, sublicense, and/or sell                                     // 17  // 25
 * copies of the Software, and to permit persons to whom the                                             // 18  // 26
 * Software is furnished to do so, subject to the following                                              // 19  // 27
 * conditions:                                                                                           // 20  // 28
 *                                                                                                       // 21  // 29
 * The above copyright notice and this permission notice shall be                                        // 22  // 30
 * included in all copies or substantial portions of the Software.                                       // 23  // 31
 *                                                                                                       // 24  // 32
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,                                       // 25  // 33
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES                                       // 26  // 34
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND                                              // 27  // 35
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT                                           // 28  // 36
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,                                          // 29  // 37
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING                                          // 30  // 38
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR                                         // 31  // 39
 * OTHER DEALINGS IN THE SOFTWARE.                                                                       // 32  // 40
 */                                                                                                      // 33  // 41
                                                                                                         // 34  // 42
ReactiveCountdown = (function () {                                                                       // 35  // 43
                                                                                                         // 36  // 44
    // Constructor                                                                                       // 37  // 45
    function ReactiveCountdown(countdown, settings) {                                                    // 38  // 46
    	this._settings = settings || {};                                                                    // 39  // 47
    	this._dependency = new Tracker.Dependency;                                                          // 40  // 48
    	this._countdown = countdown;                                                                        // 41  // 49
    	this._interval = this._settings.interval || 1000;                                                   // 42  // 50
    	this._steps = this._settings.steps || 1;                                                            // 43  // 51
    	this._id = false;                                                                                   // 44  // 52
    };                                                                                                   // 45  // 53
                                                                                                         // 46  // 54
    ReactiveCountdown.prototype.start = function(completed, tick){                                       // 47  // 55
                                                                                                         // 48  // 56
    	if(completed) this._settings.completed = completed;                                                 // 49  // 57
    	if(tick) this._settings.tick = tick;                                                                // 50  // 58
                                                                                                         // 51  // 59
    	this._current = this._countdown;                                                                    // 52  // 60
                                                                                                         // 53  // 61
    	this._id = Meteor.setInterval(function(){                                                           // 54  // 62
                                                                                                         // 55  // 63
    		this._current = this._current - this._steps;                                                       // 56  // 64
                                                                                                         // 57  // 65
    		if(typeof(this._settings.tick) == "function") {                                                    // 58  // 66
    			this._settings.tick();                                                                            // 59  // 67
    		}                                                                                                  // 60  // 68
                                                                                                         // 61  // 69
            this._dependency.changed();                                                                  // 62  // 70
                                                                                                         // 63  // 71
    		if(this._current <= 0) {                                                                           // 64  // 72
                                                                                                         // 65  // 73
    			this.stop();                                                                                      // 66  // 74
                                                                                                         // 67  // 75
    			if(typeof(this._settings.completed) == "function") {                                              // 68  // 76
    				this._settings.completed();                                                                      // 69  // 77
    			}                                                                                                 // 70  // 78
    		}                                                                                                  // 71  // 79
                                                                                                         // 72  // 80
        }.bind(this), this._interval);                                                                   // 73  // 81
    };                                                                                                   // 74  // 82
                                                                                                         // 75  // 83
    ReactiveCountdown.prototype.stop = function(){                                                       // 76  // 84
        Meteor.clearInterval(this._id);                                                                  // 77  // 85
        this._id = false;                                                                                // 78  // 86
    };                                                                                                   // 79  // 87
                                                                                                         // 80  // 88
    ReactiveCountdown.prototype.add = function(unit) {                                                   // 81  // 89
    	this._current = this._current + (unit || 0);                                                        // 82  // 90
    };                                                                                                   // 83  // 91
                                                                                                         // 84  // 92
    ReactiveCountdown.prototype.remove = function(unit) {                                                // 85  // 93
    	this._current = this._current - (unit || 0);                                                        // 86  // 94
    };                                                                                                   // 87  // 95
                                                                                                         // 88  // 96
    ReactiveCountdown.prototype.get = function() {                                                       // 89  // 97
    	                                                                                                    // 90  // 98
    	this._dependency.depend();                                                                          // 91  // 99
                                                                                                         // 92  // 100
    	return this._current;                                                                               // 93  // 101
    };                                                                                                   // 94  // 102
                                                                                                         // 95  // 103
    return ReactiveCountdown;                                                                            // 96  // 104
})();                                                                                                    // 97  // 105
                                                                                                         // 98  // 106
                                                                                                         // 99  // 107
                                                                                                         // 100
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 109
                                                                                                                // 110
}).call(this);                                                                                                  // 111
                                                                                                                // 112
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['flyandi:reactive-countdown'] = {
  ReactiveCountdown: ReactiveCountdown
};

})();

//# sourceMappingURL=flyandi_reactive-countdown.js.map
