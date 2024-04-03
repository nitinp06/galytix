Cypress.on('uncaught:exception', (err, runnable) => {
    // Your custom error handling logic
    // You can log the error, assert on it, or take any other actions
  
    // For example, you can log the error to the Cypress console
    cy.log('Uncaught Exception: ', err.message);
    
    // You can also fail the test if needed
    // cy.fail('Test failed due to an uncaught exception: ' + err.message);
  
    // Return false to prevent the error from failing the test
    return false;
  });
  