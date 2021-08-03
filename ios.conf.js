const path = require('path');

const iosCaps = {
  deviceName: 'iPhone 11',
  automationName: 'XCUITest',
  app: path.resolve('./sample_apps/iOS.app')
}

const appiumIosConfig = {
  platform: 'iOS',
  desiredCapabilities: iosCaps
}

function spinUpForIos() {
  exports.config = {
    output: './output',
    helpers: {
      Appium: appiumIosConfig,
      Mochawesome: {
        uniqueScreenshotNames: true
      }
    },
    include: {
      I: './steps_file.js'
    },
    mocha: {
      reporterOptions: {
        'codeceptjs-cli-reporter': {
          stdout: '-',
          options: {
            verbose: true,
            steps: true
          }
        },
        mochawesome: {
          stdout: './output/console.log',
          options: {
            reportDir: './output',
            reportFilename: 'report'
          }
        },
        'mocha-junit-reporter': {
          stdout: './output/console.log',
          options: {
            mochaFile: './output/result.xml',
            attachments: true
          }
        }
      }
    },
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
      features: './features/*.feature',
      steps: ['./step_definitions/steps.js']
    },
    plugins: {
      screenshotOnFail: {
        enabled: true
      },
      allure: {
        enabled: true
      },
      pauseOnFail: {},
      retryFailedStep: {
        enabled: true
      },
      tryTo: {
        enabled: true
      }
    },
    tests: './ios/*_test.js',
    name: 'appium-codecept-Android-POC'
  }
}

spinUpForIos();