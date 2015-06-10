angular.module("personalPageApp").directive("uiTechSkills", function () {
	return{
		templateUrl: "view/tech-skills.html",
		replace: true,
		scope: {
			name:"@",
			rating:"@"			
		},
		link: function (scope, element, attrs) {
						
			var _fetchRatingClasses = function () {
				var ratingClasses = ["", "", "", "", ""];
				for (var index = 0; index < scope.rating; index++) {
						ratingClasses[index] = "filled";
				}
				return ratingClasses.reverse();
			};
				
			scope.ratingClasses = _fetchRatingClasses(); 
		}		
	};
});