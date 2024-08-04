# README #

## Robotshop automation project <hr>

* This playwright test automation is created to run on:

1. https://eu.robotshop.com/

* It covers only UI of the website

* It's created with javascript

* As design pattern, POM is prefered

### How to set up? <hr>
```bash
npm init playwright@latest
```

### Folder structure  <hr>

> * node_modules
> * pages: holds web page specified methods 
> * playwright-report
> * support: holds hooks and custom commands
> * test-results
> * tests: holds actual test files
> * .gitignore: ignore the files to commit
> * package-lock.json
> * package.json
> * playwright.config.ts: playwright configuration file
> * README.dm

### How to run tests? <hr>

  * Runs the end-to-end tests.
    ```bash 
    npx playwright test
    ```

  * Starts the interactive UI mode.
     ```bash 
    npx playwright test --ui
    ```

  * Runs the tests only on Desktop Chrome.
     ```bash 
    npx playwright test --project=chromium
    ```

  * Runs the tests in a specific file.
     ```bash 
    npx playwright test example
    ```

  * Runs the tests in debug mode.
    ```bash 
    npx playwright test --debug
    ```

  * Auto generate tests with Codegen.
    ```bash 
    npx playwright codegen
    ```

  * run specific env file
    ```bash
    npx playwright test --workers=1 --ui --config=playwright.config.*dashboard*.js
    ```

  * run specific test in specific file
    ```bash
    npx playwright test --workers=1 --config=playwright.config.*marketplace.js **003_Post**.spec.js
    ```