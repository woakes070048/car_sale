
{% include 'erpnext/selling/sales_common.js' %}

frappe.ui.form.on("Sales Order", {
        items_on_form_rendered: function() {
            console.log('items_on_form_rendered')
            erpnext.setup_serial_no();
        }
})




