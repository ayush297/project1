sap.ui.define(["sap/ui/core/mvc/Controller"

],function(Controller){
    return Controller.extend("project1.controller.View2",{
        onInit(){
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("View2").attachMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function(oEvent){
            var sInvoiceId = oEvent.getParameter("arguments").invoiceId;
            var invoiceRelativePath = "/Invoices/" + sInvoiceId;
            this.getView().bindElement({
                path: invoiceRelativePath,
                model: "global" 
            });
        },
        onPost: function(){
                var oHeader = this.getView().getBindingContext("global").getObject();

                // Clone to avoid accidental model reference changes
                var oHeaderCopy = JSON.parse(JSON.stringify(oHeader));

                // Now oHeaderCopy contains:
                // - updated header fields (invoiceNumber, vendorCode, etc.)
                // - updated invoiceItems array with changed amounts, etc.

                console.log("Header:", oHeaderCopy);
                console.log("Items:", oHeaderCopy.invoiceItems);
        }
    });

});