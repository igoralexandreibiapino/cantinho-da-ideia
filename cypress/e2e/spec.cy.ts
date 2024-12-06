describe('Inserção de Postagem', () => {
  it('Deve inserir uma nova postagem com sucesso', () => {
    cy.visit('http://localhost:4200'); 

    // Navegar até a tela de inserção
    cy.get('[data-cy="add-post-btn"]').click(); 
    // Preencher o formulário
    cy.get('[data-cy="title-input"]').type('Nova postagem');
    cy.get('[data-cy="body-input"]').type('Corpo de Teste com conteúdo suficiente.');
    cy.get('[data-cy="user-id-input"]').type('1');

    // Submeter o formulário
    cy.get('[data-cy="save-btn"]').click();

    // Verificar se a postagem foi inserida corretamente
    cy.contains('Nova postagem').should('exist');
  });
});
