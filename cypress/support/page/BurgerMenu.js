class BurgerMenu {
    shopingCart = '[data-test="shopping-cart-link"]';
    addToCart1 = '[data-test="add-to-cart-sauce-labs-backpack"]';
    addToCart2 = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    menuButton = '#react-burger-menu-btn';
    allItems = '#inventory_sidebar_link';
    about = '#about_sidebar_link';
    logout = '#logout_sidebar_link';
    resetAppState = '#reset_sidebar_link';
    closeMenu = '#react-burger-cross-btn';

    // Method untuk membuka halaman keranjang
    opencart() {
        cy.get(this.shopingCart).click();
    }
    // Method untuk membuka burger menu
    openMenu() {
        cy.get(this.menuButton).click();
    }
    // Method untuk membuka semua item dari burger menu
    openAllItems() {
        cy.get(this.allItems).click();
    }
    // Method untuk membuka About dari burger menu
    // Memastikan link saucelabs.com ada di about menu
    openAbout() {
        cy.get(this.about).should('have.attr', 'href')
        .and('include', 'saucelabs.com');
    }
    // Method untuk membuka Logout dari burger menu
    openLogout() {
        cy.get(this.logout).click();
    }
    
    openResetAppState() {
        cy.get(this.resetAppState).click();
    }
    // Method untuk  menutup burger menu
    opencloseMenu() {
        cy.get(this.closeMenu).click();
    }
    // Method untuk memverifikasi bahwa ikon burger menu terlihat
    // pada halaman inventory
    verifyMenuButtonVisible() {
        cy.get(this.menuButton).should('be.visible');
    }
    // Method untuk memverifikasi bahwa semua item terlihat
    verifyAllItemsVisible() {
        cy.get(this.allItems).should('be.visible');
    }
    // Method untuk memverifikasi bahwa About terlihat
    verifyAboutVisible() {
        cy.get(this.about).should('be.visible');
    }
    // Method untuk memverifikasi bahwa Logout terlihat
    verifyLogoutVisible() {
        cy.get(this.logout).should('be.visible');
    }
    // Method untuk memverifikasi bahwa Reset App State terlihat
    verifyResetAppStateVisible() {
        cy.get(this.resetAppState).should('be.visible');
    }
    // Method untuk memverifikasi bahwa tombol close menu terlihat
    verifyCloseMenuVisible() {
        cy.get(this.closeMenu).should('be.visible');
    }
    // Method untuk menambahkan item 1 ke keranjang
    additem1() {
        cy.get(this.addToCart1).click();
    }
    // Method untuk menambahkan item 2 ke keranjang
    additem2() {
        cy.get(this.addToCart2).click();
    }

    
    //method generik untuk memverifikasi elemen-elemen pada burger menu
    verifyBurgerMenuElements() {
        this.verifyAllItemsVisible();
        this.verifyAboutVisible();
        this.verifyLogoutVisible();
        this.verifyResetAppStateVisible();
        this.verifyCloseMenuVisible();
    }

}

export default BurgerMenu;