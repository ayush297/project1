sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },
        onListItemPress: function(oEvent){
            var oItem = oEvent.getSource().getBindingContextPath();

            var sIndex = oItem.split("/").pop();
            this.oRouter.navTo('View2',{
                invoiceId : sIndex
            });
        }
    });
});