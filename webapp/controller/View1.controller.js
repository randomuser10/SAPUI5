sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("projectapp.projectmds.controller.View1", {
        onInit() {
        },
        onPress() {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        onSubmt(){
            var name = this.getView().byId("idInp").getValue();
            var msg = "Welcome to " + name;
            this.getView().byId("idTxt").setText(msg);
            this.getView().byId("idbtn1").setType("Accept");
            this.getView().byId("idTxt").setTextAlign("Left");
            this.getView().byId("lbl1").setRequired(false);
            this.getView().byId("idInp").setEnabled(false);
        },
        onSave1(){
            var empid = this.getView().byId("EpIdIp").getValue();
            this.getView().byId("EpIdIp1").setValue(empid);
            
            var empname = this.getView().byId("EpNamIp").getValue();
            this.getView().byId("EpNamIp1").setValue(empname);


        }
        
        
    });
});