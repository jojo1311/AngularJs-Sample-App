
angular.module('myApp', [])
	.controller('MainCrtl', function($scope){
		$scope.categories = [
			{"id":0, "name": "Development"},
			{"id":1, "name": "Design"},
			{"id":2, "name": "Exercise"},
			{"id":3, "name": "Tutorials"}
		];

		$scope.bookmarks = [
			{"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
			{"id":1, "title": "A List Apart", "url": "http://alistapart.com", "category": "Design"},
			{"id":2, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development"},
			{"id":3, "title": "Design TutsPlus", "url": "http://http://webdesign.tutsplus.com", "category": "Design"},
			{"id":4, "title": "Code TutsPlus", "url": "http://code.tutsplus.com/courses", "category": "Tutorials"},
			{"id":5, "title": "Code Academy", "url": "http://www.codecademy.com/en/courses/learn-the-command-line", "category": "Exercise"},
			{"id":6, "title": "One Page Love", "url": "http://onepagelove.com", "category": "Design"},
			{"id":7, "title": "MobilityWOD", "url": "http://mobilitywod.com", "category": "Development"},
			{"id":8, "title": "Lynda", "url": "http://Lynda.com", "category": "Tutorials"},
			{"id":9, "title": "Pluralsight", "url": "http://pluralsight.com", "category": "Tutorials"},
			{"id":10, "title": "Digital Tutors", "url": "http://digitaltutors.com", "category": "Design"},


		];

		$scope.currentCategory = null;

		// private functions
		function setCurrentCategory(category){
			$scope.currentCategory = category;
		}

		function isCurrentCategory(category){
			return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
		}

		// making functions public to the view
		$scope.setCurrentCategory = setCurrentCategory;
		$scope.isCurrentCategory = isCurrentCategory;

	})
;



