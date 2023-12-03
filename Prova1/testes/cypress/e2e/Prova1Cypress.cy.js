describe('Testando GlobalsQA', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    // Clique no botão para revelar a lista de nomes
    cy.get('.borderM > :nth-child(1) > .btn').click()

    // Selecione a opção "Harry Potter" da lista
    cy.contains('[ng-model="custId"] option', 'Harry Potter').then(($option) => {
      cy.get('[ng-model="custId"]').select($option.val())
    })

    // Clique no botão de login após selecionar a opção
    cy.get('.btn.btn-default').click()

    // Verifique se a URL contém '/customer' após fazer login
    cy.url().should('include', '/customer')
  
  })

  it('Deve acessar a página de depósito após login', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

    // Clique no botão para revelar a lista de nomes
    cy.get('.borderM > :nth-child(1) > .btn').click()

    // Adicione uma espera explícita após o clique para aguardar a renderização da lista de nomes
    cy.get('[ng-model="custId"]').should('be.visible')

    // Interaja diretamente com o <select> para escolher a opção "Harry Potter"
    cy.get('[ng-model="custId"]').select('Harry Potter')

    // Clique no botão de login após selecionar a opção
    cy.get('.btn.btn-default').click()

    // Aguarde a URL incluir '/account' após fazer login
    cy.url().should('include', '/account')

    // Verifique se o botão Deposit está presente na página de conta e clique nele
    cy.contains('Deposit').click()

    // Realize verificações específicas da página de depósito, se necessário
    cy.url().should('include', '/account') // (ou ajuste conforme a estrutura real)
  })

  it('Deve exibir o saldo na conta após login', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

    // Clique no botão para revelar a lista de nomes
    cy.get('.borderM > :nth-child(1) > .btn').click()

    // Adicione uma espera explícita após o clique para aguardar a renderização da lista de nomes
    cy.get('[ng-model="custId"]').should('be.visible')

    // Interaja diretamente com o <select> para escolher a opção "Harry Potter"
    cy.get('[ng-model="custId"]').select('Harry Potter')

    // Clique no botão de login após selecionar a opção
    cy.get('.btn.btn-default').click()

    // Aguarde a URL incluir '/account' após fazer login
    cy.url().should('include', '/account')

    // Verifique se o saldo é exibido na página de conta
    cy.get('.borderM > :nth-child(2)').should('contain.text', '')
  })
})

