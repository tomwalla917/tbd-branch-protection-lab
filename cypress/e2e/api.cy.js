describe('GHCR lab starter API', () => {
  it('GET / returns welcome message', () => {
    cy.request('/').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('ok');
      expect(response.body.message).to.eq('Welcome to the GHCR lab starter API');
    });
  });

  it('GET /health returns service status', () => {
    cy.request('/health').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('ok');
      expect(response.body.service).to.eq('ghcr-demo-api');
    });
  });

  it('POST /graphql query books returns seeded data', () => {
    cy.request('POST', '/graphql', {
      query: '{ books { id title author } }'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.books.length).to.be.greaterThan(0);
    });
  });
});
