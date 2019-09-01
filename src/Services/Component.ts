import { AppBase } from './../Interfaces/AppBase';
import { RegisteredComponents } from './../RegisteredComponents';

export class Component {
    created: Object;
    registeredComponents: Object;
    app: AppBase;

    public constructor(app: AppBase) {
        this.app = app;
        this.registeredComponents = RegisteredComponents;

        this.created = {};
    }

    private findIn(element: Document | HTMLElement) {
        return element.querySelectorAll('[component]');
    }

    private create(components: any) {
        for (var i = 0 , length = components.length; i < length ; i++) {
            var component = components[i];
            var componentName = component.getAttribute("component");

            if (this.registeredComponents[componentName]) {
                this.created[componentName] = new this.registeredComponents[componentName];
            }
        }
    }

    public findAndCreate(element: Document | HTMLElement) {
        let components = this.findIn(element);
        this.create(components);
    }
}