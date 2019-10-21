import React from 'react'

describe('bqchat e to e', () => {
    it('e to e test', () => {
        cy.visit('/')

        // selecting user from dropdown loads their chats
        cy.get('select').select('Quint')
        cy.get('nav li').should('contain', 'Chat with Wessel')

        // click on chat list item loads chat
        cy.contains('Chat with').click()
        cy.get('textarea#message-input').should('exist')

        // type into chat textarea, verify that the value has been updated
        cy.get('textarea#message-input')
            .type('w8ff')
            .should('have.value', 'w8ff')

        // submit chat message form, message should appear in chat window
        cy.get('button').click()
        cy.get('#chat-window div:first').should('contain', 'w8ff')
    })
})
