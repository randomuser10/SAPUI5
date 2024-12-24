sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("projectapp.projectmds.controller.View2", {
        onInit() {
        },
        goBack(){
            // this.getOwnerComponent().getRouter().navTo("RouteView1")
            history.go(-1);
        }
    });
});