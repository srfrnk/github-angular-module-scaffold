describe("ng-module", function () {
    var myService;

    beforeEach(function(){
        module("ng.myModule");
        inject(["$window", function ($window) {
            // do what needs to be done with $window
        }]);
        inject(["myService", function (myServiceI) {
            myService = myServiceI;
        }]);
    });

    it("should load", function () {
        expect(myService).not.toBeNull();
    });
});
