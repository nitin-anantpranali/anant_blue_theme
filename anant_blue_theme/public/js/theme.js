frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
	constructor() {
		super()
	}

	fetch_themes() {
		return new Promise((resolve) => {
			this.themes = [
				{
					name: "light",
					label: ("Frappe Light"),
					info: ("Default Light Theme"),
				},
				{
					name: "dark",
					label: "Timeless Night",
					info: "Default Dark Theme",
				},
				{
					name: "anant_blue_theme",
					label: "Anant Blue Theme",
					info: "The Blue theme for ERPNext"
				},
				{
					name: "automatic",
					label: "Automatic",
					info: "Uses system's theme to switch between light and dark mode",
				}
			];

			resolve(this.themes);
		});
	}
}