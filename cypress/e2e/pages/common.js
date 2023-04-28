//const cypress = require("cypress");

class common{

    elements = {
        //Inputs
        petNameInput: ()=> cy.get('[data-testid="pet"]'),
        ownerNameInput: ()=> cy.get('[data-testid="owner"]'), 
        timeInput: ()=> cy.get('[data-testid="time"]'),
        
        
        dateInput: ()=> cy.get('[data-testid="date"]'),
        symptomsInput: ()=> cy.get('[data-testid="symptoms"]'),


        //Titles
        titleText: ()=> cy.get('[data-testid="app-name"]'),
        createAppointmentText: ()=> cy.get('[data-testid="Title"]'),
        manageAppointmentText: ()=> cy.get('h2[data-testid="dynamic-title"]'),
        alertText: ()=> cy.get('[data-testid="alert"]'),

        //Buttons
        addAppointmentBTN: ()=> cy.get('[data-testid="btn-submit"]'),
        deleteAppointmentBTN: ()=> cy.get('[data-testid="btn-delete"]'),

        appointmentCard: ()=> cy.get('[data-testid="appointment"]'),

        //DEMO QA
        mainHeaderText: ()=> cy.get('.main-header').contains('Elements')
    }

    typePetName (petName){
        this.elements.petNameInput().type(petName)
    }

    assertHeaderText(){
        this.elements.mainHeaderText()
    }

    typeOwnerName (ownerName){
        this.elements.ownerNameInput().type(ownerName)
    }


    typeTime (time){
        const dayjs = require("dayjs");
        const Timenow12hours = dayjs().format("hh:mm a");
        cy.get('[data-testid="time"]').type(dayjs().format("hh:mm"))
    }

    typeDate (date){
        const dayjs = require('dayjs')
        cy.get('[data-testid="date"]').type(dayjs().format('YYYY-MM-DD')) //input today's date in DD/MM/YYYY format


    }

    typeSymptoms (symptoms){
        this.elements.symptomsInput().type(symptoms)
        
    }

    clickAddAppointment(){
        this.elements.addAppointmentBTN().click()
    
        
    }
    
    clickDeleteAppointment(){
        this.elements.deleteAppointmentBTN().click();
    }

    validateCreateTitle(){
        this.elements.titleText().should('be.visible')
    }

    validateDeleteTitle(){ 
        this.elements.manageAppointmentText().should('be.visible')

    }

    validateCreatedAppointment(){
        this.elements.appointmentCard().should('be.visible')

}
    validateRequiredFields(){
        this.elements.alertText().should('be.visible')

    }

    screenResize() {
        cy.viewport(1920, 1080)
    }

    urlNavigation() {
        cy.visit('https://demoqa.com/elements')

    }


}

module.exports = new common();