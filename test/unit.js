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

        function loadElement(templatePath) {
            return angular.element(this.$templateCache.get(templatePath));
        };

        this.loadElement = function (templatePath) {
            this.element=angular.element("<div></div>");
            this.element.append(angular.element(this.$templateCache.get(templatePath)));
            this.$compile(this.element)(this.scope);
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
        this.scope.someThing='something i need in the scope';
        this.loadElement("test/directive.html");
        expect(this.element.find("div.directive-put-this").length).toBe(1);
    });
});
