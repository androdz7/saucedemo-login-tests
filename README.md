## Overview:
- This project automates login functionality tests for the SauceDemo application: https://www.saucedemo.com/

## Features:
- Login validation tests:
  - Empty username & password (UC-1)
  - Empty password (UC-2)
  - Successful login (UC-3)
- Product page verification after authentication
- Page Object Model (POM) structure
- Data-driven test support
- Parallel execution support
- Cross-browser testing (Edge & Firefox)
- Centralized logging with **Winston**




## Environment Variables
- This project uses a `.env` file for configuration.

- To set it up:
  1. Duplicate `.env.example`
  2. Rename the copy to `.env`
  3. Fill in required values (username, password, base URL, timeout)


## Logging
- The project uses **Winston** for structured test logging.

- Log output is written to: /logs/tests.log

- Logs include:
  - test start & finish messages  
  - validation checkpoints  
  - warnings & errors  

-----------------------------------------

Task description

Launch URL: https://www.saucedemo.com/
UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".
UC-2 Test Login form with credentials by passing Username:
Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".
UC-3 Test Login form with credentials by passing Username & Password:
Type credentials in username which are under Accepted username are sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard.
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.
Please, add task description as README.md into your solution!
To perform the task use the various of additional options:
Test Automation tool: WebDriverIO;
Browsers: 1) Edge; 2) Firefox;
Locators: XPath;
Patterns: Page Object;
Assertions: Use from the selected framework;
[Optional] Loggers: Use from the selected framework.