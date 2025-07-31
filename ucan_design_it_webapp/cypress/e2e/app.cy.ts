describe('App', () => {
  it('should render the project management page', () => {
    cy.visit('/')
    cy.contains('Project Management')
  })
})
