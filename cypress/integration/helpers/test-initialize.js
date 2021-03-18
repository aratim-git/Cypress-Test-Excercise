export default {
    launchWebsite: launchWebsite,
};

function launchWebsite() {
    cy.visit(Cypress.env('url'));
}
