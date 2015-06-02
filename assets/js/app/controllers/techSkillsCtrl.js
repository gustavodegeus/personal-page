angular.module("personalPageApp").controller("techSkillsCtrl", function ($scope) {
	
	$scope.techSkills = [{
		name: 'Java',
		rating: 5,
		testgit: 5	
	}];
	
	
	
	console.log($scope.$id);
})