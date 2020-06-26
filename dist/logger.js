(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('logger', factory) :
	(global = global || self, global.Logger = factory());
}(this, function () { 'use strict';

	var Logger = (function () {
	    function Logger() {
	        if (typeof window !== 'undefined') {
	            console.log('Init My class');
	        }
	    }
	    return Logger;
	}());

	return Logger;

}));
//# sourceMappingURL=logger.js.map
