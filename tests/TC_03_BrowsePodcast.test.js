/* Scenario 1: 
Browse podcast video and click and verify user is able to open random podcast video

Scenario Description: 
User opens podcast url and click and verify random podcast video

Test test.steps:
1. User navigates to podcast screen
2. User opens random podcase video
*/

import test from '../testFixtures/fixture'
import fs from 'fs'
const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

test.describe(`@smoke: Browse podcast and verify the brodcase screen`,() => {
    test(`Open random prodcast and verify the prodcast information`, async ({
        podcastsPage
    }) => {
        await test.step(
            `1. Launch the podcast site and verify page title`, async () => {
                await podcastsPage.openApp()
                await podcastsPage.verifyPageTitle(testData.podcast_title)
            })
        await test.step(
            `2. Click on random video podcast`, async () => {
                const textToVerify = await podcastsPage.clickOnRandomPodcastAndReturnText()
                await podcastsPage.verifySearchResults(textToVerify)
            })       
        }) 
	})