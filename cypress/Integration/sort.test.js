/// <reference types="cypress" />

import LoginPage from '../support/page/LoginPage';
import SortPage from '../support/page/SortPage';

describe('Sort Products', function () { // function biasa
  const loginPage = new LoginPage();
  const sortPage = new SortPage();


  beforeEach(function () { // function biasa
    cy.fixture('credentials').as('cred');
    
    cy.get('@cred').then((cred) => {
    loginPage.visit(); 
    loginPage.login(cred.validCredentials.username, cred.validCredentials.password);
    cy.url().should('include', '/inventory.html');

    });
  });


  it('Sort Name A-Z', () => {
    sortPage.selectSort('az');
    sortPage.getProductNames().then(names => {
      const sortedNames = [...names].sort();
      expect(names).to.deep.equal(sortedNames);
    });
  });

  it('Sort Name Z-A', () => {
    sortPage.selectSort('za');
    sortPage.getProductNames().then(names => {
      const sortedNames = [...names].sort().reverse();
      expect(names).to.deep.equal(sortedNames);
    });
  });

  it('Sort Price Low to High', () => {
    sortPage.selectSort('lohi');
    sortPage.getProductPrices().then(prices => {
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });

  it('Sort Price High to Low', () => {
    sortPage.selectSort('hilo');
    sortPage.getProductPrices().then(prices => {
      const sortedPrices = [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });
});
