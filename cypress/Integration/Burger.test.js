/// <reference types="cypress" />
import LoginPage from '../support/page/LoginPage';
import BurgerMenu from '../support/page/BurgerMenu';

describe('Burger Menu', function () {
    const loginPage = new LoginPage();
    const burgermenu = new BurgerMenu();

    beforeEach(function () {
        cy.fixture('credentials').as('cred');
        loginPage.visit(); // Mengunjungi halaman login sebelum setiap test

        cy.get('@cred').then((cred) => {  // login dengan data dari fixture
    loginPage.visit(); 
    loginPage.login(cred.validCredentials.username, cred.validCredentials.password);
    cy.url().should('include', '/inventory.html');
    });

});

    it('Visibility burger icon on every page', () => {
        // Verifikasi bahwa ikon burger menu terlihat di halaman inventory
        burgermenu.verifyMenuButtonVisible();
        burgermenu.opencart();
        // Verifikasi bahwa ikon burger menu masih terlihat di halaman cart
        burgermenu.verifyMenuButtonVisible();
    });

    it('burgermenu should be open', () => {
        burgermenu.openMenu();
        // Verifikasi bahwa burger menu terbuka
        burgermenu.verifyBurgerMenuElements();
    });

    it('Should close burger menu', () => {
        burgermenu.openMenu();
        burgermenu.verifyBurgerMenuElements();
        burgermenu.opencloseMenu();
        // Verifikasi bahwa burger menu tertutup
        burgermenu.verifyMenuButtonVisible();
        
    });

    it('Should open all items from burger menu', () => { 
        burgermenu.opencart();
        burgermenu.openMenu();
        burgermenu.verifyAllItemsVisible(); 
        burgermenu.openAllItems();
        burgermenu.verifyMenuButtonVisible();
        cy.url().should('include', '/inventory.html');
    });

    it('"Should have About menu item with correct URL', () => {
        burgermenu.openMenu();
        burgermenu.verifyAllItemsVisible();
        burgermenu.openAbout();// Memastikan link saucelabs.com ada di about menu

    });

    it('should logout from aplication', () => {
        burgermenu.openMenu();
        burgermenu.verifyBurgerMenuElements();
        burgermenu.openLogout();
        // Verifikasi bahwa logout berhasil
         cy.url().should('eq', 'https://www.saucedemo.com/'); // cek balik ke login page
        cy.get('[data-test="login-button"]').should('be.visible'); // pastikan tombol login muncul
    });

    it('should reset app state', () => {
        // Tambahkan item ke keranjang
        burgermenu.additem1();
        burgermenu.additem2();
        // buka cart
        burgermenu.opencart();
        // buka burger menu
        burgermenu.openMenu();
        // verifikasi elemen burger menu
        burgermenu.verifyBurgerMenuElements();
        // reset app state
        burgermenu.openResetAppState();
        // verifikasi item di cart sudah kosong
        burgermenu.opencart();
        cy.get('.cart_item').should('not.exist'); // pastikan tidak ada item di keranjang
        // verivikasi di cartbadge kosong
        cy.get('.shopping_cart_badge').should('not.exist')
        
    });

});