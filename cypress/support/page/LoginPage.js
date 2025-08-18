class LoginPage{
    // for open Website saucedemo.com
    visit() {
        cy.visit('https://www.saucedemo.com');
    }
    // fill username field
    FillUsername(username) {
        // Check if username is provided, if not, it will not type anything
        if (username) {
       cy.get('[data-test="username"]', { timeout: 100 })
            .should('be.visible')
            .type(username);
        }
    }
    //fill password field
    FillPassword(password) {
        // Check if password is provided, if not, it will not type anything
        if (password) {
        cy.get('[data-test="password"]', { timeout: 100 })
            .should('be.visible')
            .type(password);
        }
    }
    // click on login button
    clickLoginButton() {    
        cy.get('.btn_action').click();
    }    
    // Method generik for login 
    login(username, password) {
        this.FillUsername(username);
        this.FillPassword(password);
        this.clickLoginButton();
    }
}               
export default LoginPage;