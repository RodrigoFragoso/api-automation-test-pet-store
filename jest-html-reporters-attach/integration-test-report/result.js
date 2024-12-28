window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":1,"numPassedTestSuites":2,"numPassedTests":7,"numPendingTestSuites":0,"numPendingTests":2,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":3,"numTotalTests":10,"startTime":1735381839402,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1735381844946,"runtime":5289,"slow":true,"start":1735381839657},"testFilePath":"/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/src/tests/integration/pets/pets.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["Everything about your Pets","POST /pets"],"duration":55,"failureMessages":[],"fullName":"Everything about your Pets POST /pets should create a pet","status":"passed","title":"should create a pet"},{"ancestorTitles":["Everything about your Pets","PUT /pets"],"duration":195,"failureMessages":[],"fullName":"Everything about your Pets PUT /pets should update a pet","status":"passed","title":"should update a pet"}]},{"numFailingTests":1,"numPassingTests":2,"numPendingTests":1,"numTodoTests":0,"perfStats":{"end":1735381845223,"runtime":5567,"slow":true,"start":1735381839656},"testFilePath":"/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/src/tests/integration/user/user.test.ts","failureMessage":"  ● Operations about user › POST /user › should create a new user and return it with status 201\n\n    expect(received).toBe(expected) // Object.is equality\n\n    Expected: 200\n    Received: 500\n\n    \u001b[0m \u001b[90m 2 |\u001b[39m\n     \u001b[90m 3 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m expectDefaultResponse \u001b[33m=\u001b[39m (response\u001b[33m:\u001b[39m \u001b[33mResponse\u001b[39m\u001b[33m,\u001b[39m statusCode\u001b[33m:\u001b[39m number) \u001b[33m=>\u001b[39m {\n    \u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 |\u001b[39m   expect(response\u001b[33m.\u001b[39mstatus)\u001b[33m.\u001b[39mtoBe(statusCode)\u001b[33m;\u001b[39m\n     \u001b[90m   |\u001b[39m                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n     \u001b[90m 5 |\u001b[39m   expect(response)\u001b[33m.\u001b[39mtoHaveProperty(\u001b[32m'type'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'application/json'\u001b[39m)\u001b[33m;\u001b[39m\n     \u001b[90m 6 |\u001b[39m }\u001b[33m;\u001b[39m\n     \u001b[90m 7 |\u001b[39m\u001b[0m\n\n      at expectDefaultResponse (src/tests/integration/shared/utils/expectsCommons.ts:4:27)\n      at Expects.checkCreateUser (src/tests/integration/user/expects.ts:7:26)\n      at src/tests/integration/user/user.test.ts:28:17\n      at fulfilled (src/tests/integration/user/user.test.ts:5:58)\n","testResults":[{"ancestorTitles":["Operations about user","POST /user"],"duration":98,"failureMessages":["Error: expect(received).toBe(expected) // Object.is equality\n\nExpected: 200\nReceived: 500\n    at expectDefaultResponse (/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/src/tests/integration/shared/utils/expectsCommons.ts:4:27)\n    at Expects.checkCreateUser (/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/src/tests/integration/user/expects.ts:7:26)\n    at /home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/src/tests/integration/user/user.test.ts:28:17\n    at Generator.next (<anonymous>)\n    at fulfilled (/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/src/tests/integration/user/user.test.ts:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"],"fullName":"Operations about user POST /user should create a new user and return it with status 201","status":"failed","title":"should create a new user and return it with status 201"},{"ancestorTitles":["Operations about user","POST /user"],"duration":208,"failureMessages":[],"fullName":"Operations about user POST /user should return a 500 status code when the problem with the server","status":"passed","title":"should return a 500 status code when the problem with the server"},{"ancestorTitles":["Operations about user","GET /user"],"duration":37,"failureMessages":[],"fullName":"Operations about user GET /user should return a 200 status code when the user is found","status":"passed","title":"should return a 200 status code when the user is found"},{"ancestorTitles":["Operations about user","GET /user"],"duration":null,"failureMessages":[],"fullName":"Operations about user GET /user should return a 404 status code when the user is not found","status":"pending","title":"should return a 404 status code when the user is not found"}]},{"numFailingTests":0,"numPassingTests":3,"numPendingTests":1,"numTodoTests":0,"perfStats":{"end":1735381845248,"runtime":5619,"slow":true,"start":1735381839629},"testFilePath":"/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/src/tests/integration/store/store.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["Access to Petstore orders","POST /store/order"],"duration":47,"failureMessages":[],"fullName":"Access to Petstore orders POST /store/order should create a new order","status":"passed","title":"should create a new order"},{"ancestorTitles":["Access to Petstore orders","GET /store/order/{orderId}"],"duration":243,"failureMessages":[],"fullName":"Access to Petstore orders GET /store/order/{orderId} should return a 200 status code when the order is found","status":"passed","title":"should return a 200 status code when the order is found"},{"ancestorTitles":["Access to Petstore orders","DELETE /store/order/{orderId}"],"duration":36,"failureMessages":[],"fullName":"Access to Petstore orders DELETE /store/order/{orderId} should delete an order","status":"passed","title":"should delete an order"},{"ancestorTitles":["Access to Petstore orders","DELETE /store/order/{orderId}"],"duration":null,"failureMessages":[],"fullName":"Access to Petstore orders DELETE /store/order/{orderId} should return a 404 status code when the order is not found","status":"pending","title":"should return a 404 status code when the order is not found"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":true,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":true,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":3,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/node_modules/jest-html-reporters/index.js",{"publicPath":"./reports-integration-tests","filename":"integration-test-report.html","openReport":false,"pageTitle":"Integration Test Report"}],["/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/node_modules/jest-junit/index.js",{"outputDirectory":"./reports-integration-tests","outputName":"integration-test-report.xml","reportTestSuiteErrors":true}]],"rootDir":"/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store","runTestsByPath":false,"seed":1609248044,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/home/runner/work/api-automation-test-pet-store/api-automation-test-pet-store/node_modules/@jest/test-sequencer/build/index.js","testTimeout":60000,"updateSnapshot":"none","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1735381845300,"_reporterOptions":{"publicPath":"./reports-integration-tests","filename":"integration-test-report.html","expand":false,"pageTitle":"Integration Test Report","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})