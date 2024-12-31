import frappe

@frappe.whitelist()
def switch_theme(theme):
	if theme in ["Dark", "Light", "Automatic", "Anant_blue_theme",]:
		frappe.db.set_value("User", frappe.session.user, "desk_theme", theme)