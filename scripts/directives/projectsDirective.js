angular.module("personalPageApp").directive("uiProjects", function () {
	return{
		templateUrl: "views/projects.html",
		replace: true,
		transclude: true,
		scope: {
			title:"@",
			subtitle:"@",
			imageName:"@"			
		}		
	};
});