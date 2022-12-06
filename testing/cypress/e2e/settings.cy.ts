describe("Test settings UI", () => {
    beforeEach(() => {
        cy.visit('/admin/settings')
        cy.fixture('userData').then((u:any) => {
            globalThis.user = u            
        })
    })
    it("verify the current url includes settings", () => {
    cy.hasCorrectUrl('/admin/settings', 'settings')
    });

    it('verify user data structure', () => {
        cy.wrap(globalThis.user).should('be.an', 'object').and('have.keys', ['userName', 'email', 'name', 'address', 'aboutMe'])
    })

    it('update username', () => {
        cy.get('[data-cy="user-name"]').clear().should('be.empty')
        cy.get('[data-cy="user-name"]').type(globalThis.user.userName)
    })


  });