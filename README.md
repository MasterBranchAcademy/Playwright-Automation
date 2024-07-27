# README #

### Dashboard automation project ###

* This playwright test automation is created to run on:

1. https://eu.robotshop.com/

* It covers only UI of the website

* It's created with javascript

* As design pattern, POM is prefered

### How to set up? ###

* npm init playwright@latest

### Folder structure ###

node_modules
pages                           ### holds web page specified methods ###
playwright-report
support                         ### holds hooks and custom commands ###
test-results
tests                           ### holds actual test files ###
.gitignore                      ### ignore the files to commit ###
package-lock.json
package.json
playwright.config.ts            ### playwright configuration file ###
README.dm

### How to run tests? ###

  * npx playwright test
    Runs the end-to-end tests.

  * npx playwright test --ui
    Starts the interactive UI mode.

  * npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  * npx playwright test example
    Runs the tests in a specific file.

  * npx playwright test --debug
    Runs the tests in debug mode.

  * npx playwright codegen
    Auto generate tests with Codegen.

  * run specific env file
    npx playwright test --workers=1 --ui --config=playwright.config.*dashboard*.js

  * run specific test in specific file
    npx playwright test --workers=1 --config=playwright.config.*marketplace.js **003_Post*.spec.js