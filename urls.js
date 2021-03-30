module.exports = {
    qa: 'https://www.google.com/',
    dev: 'https://www.amazon.com/',
    stage: 'https://www.facebook.com/',
    prod: 'https://www.yahoo.com/'
}
/**
 * On windows, use this command to set environment variables
 *  cmd /C "set ENV=dev&&npm test -- --spec .\test\elements\urls.test.js"
 * 
 * And on mac
 * use this command, export ENV=qa npm run test 
 */