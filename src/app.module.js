// application testbench to exersize components
(function () {
	"use strict";
	// require("./vendor");
	require("./vendor")();
	// require("./shared/services/services");
	// require("./shared/filters/filters");
	// require("./shared/uiGridCustomDirectives/uiGridRowSelection");
	// require("./shared/uiPdfMakeDirectives/uiPdfButton");
	require("./shared/directives/directives");
	require("./shared/controllers/controllers");
	require("./modules/modules");
	// require("./globals/polyfills");
	// require("./app.resources");

	module.exports = angular.module("prohires", [
			"ui.router",
			// "ui.bootstrap",
			"ngMaterial",
			"ngAnimate",
			"ngLodash",
			// "ui.select",
			// "ngSanitize",
			// "pascalprecht.translate",
			// "angular-loading-bar",
			"ui.grid",
			"ui.grid.selection",
			"ui.grid.exporter",
			"ui.grid.edit",
			"ui.grid.pinning",
			"ui.grid.grouping",
			// "ui.grid.rowSelection",
			// "ui.pdf.button",
			"ui.grid.autoResize",
			"ui.grid.pinning",
			"ui.grid.infiniteScroll",
			"ui.grid.edit",
			"ui.grid.cellNav",
			"ui.grid.validate",
			"ui.grid.grouping",
			"ui.grid.expandable",
			"ui.grid.treeView",
			"ui.grid.pagination",
			"ui.grid.resizeColumns",
			"ngMessages",
			// "ngFileUpload",
			// "ngNotify",
			// "formly",
			// "formlyBootstrap",
			// "nvd3",
			// "toaster",
			// "ngImgCrop",
			// "gridster",
			// "ui.bootstrap.datetimepicker",
			// "dru.ui.services",
			// "dru.ui.filters",
			"prohires.directives",
			"prohires.controllers",
			"prohires.modules",
			// "ui.calendar",
			// "dndLists"
		])
		.config(require("./app.config.js"))
		
			


			

	
		// .constant("druConstants", require("./app.constants"))
		// .constant("urlConstants", require("./shared/AppConstants/urlConstants"));
})();
