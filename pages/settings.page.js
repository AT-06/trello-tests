let commonActions = require('../util/commons');

/**
 * Page object for settings page.
 */
class SettingsPage {

    /**
     * Constructor.
     */
    constructor() {
        this.deleteOption = element(By.css('#content a.quiet-button'));
        this.groupName = element(By.css('#content h1.u-inline'));
        this.editButton = element(By.xpath('//div[@class="js-current-details"]/child::a'));
        this.nameGroup = element(By.name('displayName'));
        this.shortName = element(By.css('input[name="name"]'));
        this.website = element(By.css('input[name="website"]'));
        this.descriptionTeam = element(By.css('textarea[name="desc"]'));
        this.saveButton = element(By.className('primary wide js-submit-profile'));
    }

    /**
     * Method to click save button.
     * @returns {promise.Promise<ActionSequence>} Promise
     */
    clickSaveButton() {
        return commonActions.clickElement(this.saveButton);
    }

    /**
     * Method to set name.
     * @param value to fill name.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setNameGroup(values) {
        return commonActions.setElementValues(this.nameGroup, values);
    }

    /**
     * Method to set short name.
     * @param value to fill shor name field.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setShortName(values) {
        return commonActions.setElementValues(this.shortName, values);
    }

    /**
     * Method to set website.
     * @param value to fill website field.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setWebsite(values) {
        return commonActions.setElementValues(this.website, values);
    }

    /**
     * Method to set team description.
     * @param value to fill description.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    setTeamDescription(values) {
        return commonActions.setElementValues(this.descriptionTeam, values);
    }

    /**
     * Method to click edit button.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickEditButton() {
        return commonActions.clickElement(this.editButton);
    }

    /**
     * Method to verify if team is created.
     * @param nameGroup the team name.
     * @returns {promise.Promise<boolean>} Promise.
     */
    isTeamNameSameToCreated(nameGroup) {
        return commonActions.isElementContainsText(this.groupName, nameGroup);
    }

    /**
     * Method to click delete option.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    clickDeleteOption() {
        return commonActions.clickElement(this.deleteOption);
    }

    /**
     * Method to fill team fields when edited.
     * @param teamInputs values to fill fields.
     * @returns {promise.Promise<ActionSequence>} Promise.
     */
    fillTeamFields(teamInputs) {
        /*return this.setTeamName(this.teamNameField, teamNameInput)
            .then(this.setTeamDescription(this.teamDescriptionField, teamDescriptionInput))
            .then(() => this.createTeam());*/
        this.iterateJson(teamInputs);
        return this.clickSaveButton();
    }

    /**
     * Method to iterate json with values for team fields.
     * @param teamInputs
     */
    iterateJson(teamInputs) {
        let jsonToFillFields = {
            'name' : () => this.setNameGroup(teamInputs.name),
            'shortName' : () => this.setShortName(teamInputs.shortName),
            'website' : () => this.setWebsite(teamInputs.website),
            'description' : () => this.setTeamDescription(teamInputs.description)
        };
        Object.keys(teamInputs).forEach(key => {
            jsonToFillFields[key].call();
        });
    }

    /**
     * Method to edit team name and description.
     * @param teamInputs values to fill fields.
     * @returns {promise.Promise<ActionSequence>} Promise
     */
    editTeam(teamInputs) {
        return this.clickEditButton()
            .then(() => this.fillTeamFields(teamInputs));
    }
}

module.exports = new SettingsPage();
