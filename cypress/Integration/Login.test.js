/// <reference types="cypress" />
import LoginPage from '../support/page/LoginPage';


describe('login feature validation', () => {
    const loginPage = new LoginPage();
    
    beforeEach(() => {
        
         cy.fixture('credentials').as('cred');// alias otomatis
        loginPage.visit(); // Mengunjungi halaman login sebelum setiap test
         
    });  


    it('Should login succesfully with credential', function ()  {
        const credentials = this.cred; // Menggunakan data yang dimuat dari fixture
        loginPage.login(credentials.validCredentials.username, credentials.validCredentials.password);
       cy.url().should('include', '/inventory.html'); // Memastikan URL mengandung /inventory.html setelah login
    });

    it('Should fail to login with invalid username and valid password', function()  {
       const credentials = this.cred; // Menggunakan data yang dimuat dari fixture
       loginPage.login(credentials.validPassword.username, credentials.validPassword.password); 
       cy.get('[data-test="error"]')
        .should('be.visible')
        .and('have.text', 'Epic sadface: Username and password do not match any user in this service');

    });

    it('Should fail to login with valid username and invalid password',function () {
        const credentials = this.cred; // Menggunakan data yang dimuat dari fixture
        loginPage.login(credentials.validUsername.username, credentials.validUsername.password);
        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('Should fail to login with invalid username and invalid password', function()  {
        const credentials = this.cred; // Menggunakan data yang dimuat dari fixture
        loginPage.login(credentials.invalidCredentials.username, credentials.invalidCredentials.password);
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
    it('Should fail to login with valid username and empty password', function()  {
        const credentials = this.cred; // Menggunakan data yang dimuat dari fixture
        loginPage.login(credentials.emptyPassword.username, credentials.emptyPassword.password);
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('have.text', 'Epic sadface: Password is required');
    });
    it('Should fail to login with empty username and valid password', function() {
        const credentials = this.cred; // Menggunakan data yang dimuat dari fixture
        loginPage.login(credentials.emptyUsername.username, credentials.emptyUsername.password);
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('have.text', 'Epic sadface: Username is required');
    });
    it('Should fail to login with empty username and empty password', function()  {
        const credentials = this.cred; // Menggunakan data yang dimuat dari fixture
        loginPage.login(credentials.emptyCredentials.username, credentials.emptyCredentials.password);
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('have.text', 'Epic sadface: Username is required');
    });
});

