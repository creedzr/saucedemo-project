class LoginPage{
    // untuk nuka Website saucedemo.com
    visit() {
        cy.visit('https://www.saucedemo.com');
    }
    // mengisi field username
    FillUsername(username) {
        // cek apakah username ada, jika tidak ada, tidak akan mengetik apa pun
        if (username) {
       cy.get('[data-test="username"]', { timeout: 100 })
            .should('be.visible')
            .type(username);
        }
    }
    //fill password field
    FillPassword(password) {
        // cek apakah password ada, jika tidak ada, tidak akan mengetik apa pun
        if (password) {
        cy.get('[data-test="password"]', { timeout: 100 })
            .should('be.visible')
            .type(password);
        }
    }
    //klik tombol login
    clickLoginButton() {    
        cy.get('.btn_action').click();
    }    
    // Menggukan data generik untuk login
    login(username, password) {
        this.FillUsername(username);
        this.FillPassword(password);
        this.clickLoginButton();
    }
}               
export default LoginPage;