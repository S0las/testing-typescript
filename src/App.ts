import { AppServices, AppBase } from './Interfaces/AppBase';
import { Component } from './Services/Component';

class App implements AppBase {
    services: AppServices;

    constructor() {
        this.services = {};
    }

    initComponents(app: AppBase) {
        this.services.component = new Component(app);
    }
}

var app = new App();

app.initComponents(app);
app.services.component.findAndCreate(document);