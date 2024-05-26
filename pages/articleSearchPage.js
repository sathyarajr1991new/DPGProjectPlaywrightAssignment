import BasePage from './basePage'
import {
    searchTextBox,
    searchButton,
    searchTextResults,
    articleListResults

} from '../pageobjects/searchPageObjects'

class SearchArticlePage extends BasePage {
    constructor(page) {
        super(page)
    }

    async verifySearchPage() {
        try {
            await this.isElementVisible(searchTextBox)
        } catch (error) {
            throw new Error(`Unable to locate this locator - > ${searchTextBox}`)
        }
    }

    async enterQueryInSearch(query) {
        try {
            await this.waitAndFill(searchTextBox, query)
        } catch (error) {
            throw new Error(`Unable to enter the query :${query} using this locator - >${searchTextBox}`)
        }
    }

    async clickOnSearchButton() {
        try {
            await this.waitAndHardClick(searchButton)
        } catch (error) {
            throw new Error(`Unable to click on search button using this locator - > ${searchButton}`)
        }
    }

    async verifySearchButton() {
        try {
            await this.isElementEnabled(searchButton)
        } catch (error) {
            throw new Error(`Unable to verify search button with this locator - > ${searchButton}`)
        }
    }

    async verifySearchResults(searchedResults) {
        try {
            await this.verifyElementContainsText(searchTextResults, searchedResults);
        } catch (error) {
            throw new Error(`Unable to verify search using the locator - > ${searchTextResults} with text: ${searchedResults}`)
        }
    }

    async verifySearchArticleListIsGreaterThanZero() {
        try {
            await this.verifyResultsListIsGreaterThanZero(articleListResults);
        } catch (error) {
            throw new Error(`Unable to verify search articles using the locator - > ${articleListResults}`)
        }
    }
}
export default SearchArticlePage