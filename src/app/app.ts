/**
 * Created by Jeremy on 10/24/2015.
 */
import {Component,bootstrap} from 'angular2/angular2'; /*need to import exactly what we need, no more global namespace*/

/* The @ symbol before the method name identifies Component as a decoration. A "decoration" is a TypeScript language feature for creating metadata about the class. Angular finds this metadata in the transpiled JavaScript and responds appropriately.*/
@Component({
    selector: 'my-app', /* The selector specifies a CSS selector for a host HTML element named my-app. Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element.*/
    template: '<h1>Hello World</h1>' /* The template field is the component's companion template that tells Angular how to render a view. Our template is a single line of HTML announcing "My First Angular App". */
})
class AppComponent { }

bootstrap(AppComponent); /*  tells Angular to start the application with this component at the application root. We'd be correct to guess that someday our application will consist of more components arising in tree-like fashion from this root. */