(function (angular) {
    "use strict";
    angular.module("ng.myModule", [])
        .factory("myService", [
            function () {
                return {};
            }
        ])
        .directive('myDirective', [function () {
            return {
//		    	restrict: "EA",
//		    	transclude: true,
//		    	template:"",
//		    	replace: true,
//		    	scope: {
//		    		prop1: "=?",
//		    		prop2: "=",
//		    		prop3: "@",
//		    		event:"&"
//		    	},
//		    	templateUrl:"",
//		    	controller: ["$scope", "$element", "$attrs", "$transclude", function ($scope, $element, $attrs, $transclude) {
//		    	}],
//              require: 'ngModel',
                link: function (scope, elm, attrs/*, ngModel*/) {
                }
            };
        }])
        .filter("myFilter", [function () {
            /*
             Usage:
             {{ input | filter-name:arg1:arg2 }}
            */
            return function (input, arg1, arg2) {
                return input + ":" + (arg1+arg2);
            };
        }]);
})(angular);
