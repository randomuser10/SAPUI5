sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("projectapp.projectmds.controller.View1", {
        onInit() {
        },
        onPress() {
            this.getOwnerComponent().getRouter().navTo("RouteView2")
        }
        
    });
});