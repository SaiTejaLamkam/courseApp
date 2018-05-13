module.exports = function () {
	"use strict";

	// Add any third party libraries that app will be using.
	global.$ = global.jQuery = require("jquery");

	require("angular");
	require("angular-ui-router");
	// require("angular-ui-bootstrap");
	require("ng-lodash");
	require("bootstrap");
	require("angular-aria");
	require("angular-animate");
	// require("bootstrap-loader");
	// require("angular-sanitize");
	require("angular-messages");
	require("angular-material");
	require("angular-translate");
	require("angular-ui-grid");

};
