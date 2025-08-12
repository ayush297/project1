sap.ui.define(["sap/ui/core/mvc/Controller"

],function(Controller){
    return Controller.extend("project1.controller.View2",{
        onInit(){
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("View2").attachMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function(oEvent){
            debugger;
            var sInvoiceId = oEvent.getParameter("arguments").invoiceId;
            var invoiceRelativePath = "/Invoices/" + sInvoiceId;
            this.getView().bindElement({
                path: invoiceRelativePath,
                model: "global" 
            });
        }
    });

});