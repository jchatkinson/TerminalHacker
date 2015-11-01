var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Jeremy on 10/24/2015.
 */
var angular2_1 = require('angular2/angular2'); /*need to import exactly what we need, no more global namespace*/
/* The @ symbol before the method name identifies Component as a decoration. A "decoration" is a TypeScript language feature for creating metadata about the class. Angular finds this metadata in the transpiled JavaScript and responds appropriately.*/
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        /*need to import exactly what we need, no more global namespace*/ angular2_1.Component({
            selector: 'my-app',
            template: '<h1>Hello World</h1>' /* The template field is the component's companion template that tells Angular how to render a view. Our template is a single line of HTML announcing "My First Angular App". */
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent); /*  tells Angular to start the application with this component at the application root. We'd be correct to guess that someday our application will consist of more components arising in tree-like fashion from this root. */
//# sourceMappingURL=app.js.map