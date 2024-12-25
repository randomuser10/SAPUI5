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
        onSave(){
            var empid = this.getView().byId("idEmpidin").getValue();
            this.getView().byId("idInput01").setInput(empid);
            
            var empname = this.getView("idEmpNameip").byId.getValue();
            this.getView().byId("idEmpName02").setText(empname);


        }
        
        
    });
});