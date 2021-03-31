describe('The form', () => {
  it('shows success message when submitted correctly', () => {
    cy.intercept('POST', '**/api/ping', {
      statusCode: 200,
      body: {},
    })

    cy.visit('http://localhost:3000')
    cy.get('[name="first_name"]').type('Adrian')
    cy.get('[name="last_name"]').type('Pilarczyk')
    cy.get('[type="submit"').click()
    cy.get('form').should('contain', 'Success!')
  })
})
