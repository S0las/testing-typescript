import { Component } from '../Services/Component';

export interface AppServices {
    component?: Component;
}

export interface AppBase {
    globalComponents?: any;
    services: AppServices;
}