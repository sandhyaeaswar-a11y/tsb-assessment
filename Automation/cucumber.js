module.exports = {
    default: {
        paths: ['Task#2/features/*.feature'],
        import: ['Task#2/features/support/hooks.js', 'Task#2/features/step_definitions/*.js'],
        format: ['json:reports/generate-report.json']
    }
};