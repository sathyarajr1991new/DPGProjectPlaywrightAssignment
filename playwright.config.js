export const testDir = 'tests'
export const timeout = 60000
export const retries = 0
export const reporter = [
	['html'],
	['junit', { outputFile: 'results.xml' }],
	['allure-playwright']
]
export const projects = [
	{
		name: `Chrome`,
		use: {
			browserName: `chromium`,
			channel: `chrome`,
			headless: false,
			viewport: { width: 1500, height: 730 },
			ignoreHTTPSErrors:true,
			locale:'en-US',
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`,    
			slowMo: 5000, // Slow down by 50ms
			userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`

		}
	},
	{
		name: `Firefox`,
		use: {
			browserName: `firefox`,
			viewport: { width: 1720, height: 850 },
			ignoreHTTPSErrors: true,
			headless: false,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`,
			launchOptions: {
				slowMo: 200
			}
		}
	},
	{
		name: `Safari`,
		use: {
			browserName: `webkit`,
			viewport: { width: 1720, height: 850 },
			ignoreHTTPSErrors: true,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`
		}
	},
	{
		name: `Edge`,
		use: {
			browserName: `chromium`,
			channel: `msedge`,
			viewport: { width: 1720, height: 850 },
			ignoreHTTPSErrors: true,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`,
			launchOptions: {
				slowMo: 100
			}
		}
	}
]
