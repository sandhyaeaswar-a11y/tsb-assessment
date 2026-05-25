const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'reports',
    reportPath: 'reports/html',

    displayDuration: true,
    metadata: {
        browser: { name: 'chromium' },
        platform: { name: 'Windows' }
    }
});