import LoginPage from "./login.page.js";
import DashboardPage from "./dashboard.page.js";

const instances = {
    login: new LoginPage(),
    dashboard: new DashboardPage(),
};

function pages(name) {
    const normalizedName = name.toLowerCase();
    
    if (!instances[normalizedName]) {
        throw new Error(`Page "${name}" not found. Available pages: ${Object.keys(instances).join(', ')}`);
    }
    
    return instances[normalizedName];
};

export default {
    pages,
    LoginPage,
    DashboardPage,
};