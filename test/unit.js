describe("ng-module", function () {
    beforeEach(function(){
        module("ng.myModule");
        module('test/directive.html');
    });

    beforeEach(function () {
        this.injectService = function () {
            var services = Array.prototype.slice.call(arguments);
            services.push(function () {
                for (i = 0; i < services.length - 1; i++) {
                    this[services[i]] = arguments[i];
                }
            });
            inject(services);
        };
        this.loadElement = function (templatePath) {
            return angular.element(this.$templateCache.get(templatePath));
        };

        this.loadElement = function (templatePath) {
            var elm = angular.element(this.$templateCache.get(templatePath));
            $j("body").append(elm);
            return elm;
        };
        this.compile = function() {
            this.$compile($j(document))(this.scope);
            this.scope.$digest();
        };

        this.injectService("$window", "$templateCache", "$rootScope", "$compile");
        this.scope=this.$rootScope.$new();
    });

    beforeEach(function(){
        this.injectService("myService");
    });

    it("service should load", function () {
        expect(this.myService).not.toBeNull();
    });

    it("directive should load", function () {
        this.loadElement("test/directive.html");
        this.scope.someThing='something i need in the scope';
        this.compile();
        expect($j("div.directive-put-this").length).toBe(1);
    });
});
