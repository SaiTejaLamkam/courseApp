(function () {
	'use strict';

	module.exports = angular.module('prohires.module.home', [])
		.config(['$stateProvider', function ($stateProvider) {
			$stateProvider.state('prohires', {
					url: '/prohires',
					views: {
						'centerContent@': {
							template: require('./home.html'),
							controller: require('./home.controller.js'),
							controllerAs: 'vm'
						}
					},
					data: {
						pageTitle: "home",
					}
				})
				
		}])
		// .component('queryScreen', require('./labQueryScreenComponent/labQueryScreen.controller.js'))
		// .component('labTests', require('./labTestComponent/labTests.js'))
		// .component('labContainer', require('./labContainerComponent/labContainer.js'))
		// .component('labPackage', require('./labPackageComponent/labPackage.controller.js'))
		// .component('labPanels', require('./labPanelsComponent/labPanels.controller.js'))
		// // .component('labRegistration', require('./labRegistration/labRegistrationComponent/labRegistration.controller.js'))
		// .component('sampleCollection', require('./sampleCollectionComponent/sampleCollection.controller.js'))
		// .component('sampleAnalysis', require('./sampleAnalysisComponent/sampleAnalysis.controller.js'))
		// .component('labRegistration', require('./labRegistrationComponent/labRegistration.controller.js'))
		// .component('workSheet', require('./workSheetComponent/workSheet.controller.js'))
		// .component('labVerification', require('./labVerificationComponent/labVerification.controller.js'))
		// .component("labImgUpload", require("./labImgUpload.js"));
})();
