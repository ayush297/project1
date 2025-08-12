sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
], (Controller, Filter, FilterOperator) => {
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
        },
        onSearch: function(oEvent){
            debugger;
            var aFilters = [];
            // var fFilter = new Filter();
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter1 = new Filter("vendorCode", FilterOperator.Contains, sQuery);
                var filter2 = new Filter("companyCode", FilterOperator.Contains, sQuery);
                var filter3 = new Filter("invoiceNumber", FilterOperator.Contains, sQuery);   
                var oFinalFilter = new sap.ui.model.Filter({
                filters: [filter1, filter2, filter3],
                and: false
            });
				aFilters.push(oFinalFilter);
			}

			// update list binding
			var oList = this.byId("idList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "Application");
        }
    });
});