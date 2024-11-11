/// <reference types="cypress" />

const { closeSync } = require("fs")

describe('Test with Page Objects', () => {
    it('autoclick', () => {
        cy.clearCookies()
        cy.visit('/')
        cy.get('#username').type('K24DTCN218')
        cy.get('#password').type('HelloWorld@2')
        cy.get('#loginbtn').click()
        let score = 0;
        cy.get('.breadcrumb > :nth-child(1)').click()
        cy.get('[role="listitem"][data-course-id="8418"] > [tabindex="-1"] > .card-img').click()
        cy.contains('Câu hỏi ôn tập Chương 1').click();
        cy.get('div.box.py-3.quizattempt').within(() => {
            cy.get('button.btn.btn-secondary').click();
        });
        cy.get('div').each(($div) => {
            // Check if the div contains exactly 4 radio buttons
            if ($div.find('input[type="radio"]').length === 4) {
              // Select a random radio button within the div
              cy.wrap($div).find('input[type="radio"]').eq(Math.floor(Math.random() * 4)).wait(3000).click();
            }})
        cy.contains('Hoàn thành bài thi...').click()
        cy.wait(1000)
        cy.contains('Nộp bài và kết thúc').click()
        cy.wait(1000)
        cy.get('div[role="dialog"]').find('.btn.btn-primary').click();
        cy.get('td.cell > :nth-child(1)').then(($span) =>{
            let score = $span.text();
            cy.log(score);
            })
        cy.wait(1000)
        cy.scrollTo(0,5000)
        cy.contains('Dừng xem lại').click();
        // if (score < 5) {
        //     cy.clearCookies()
        //     cy.visit('/')
        //     cy.get('#username').type('K24DTCN218')
        //     cy.get('#password').type('HelloWorld@2')
        //     cy.get('#loginbtn').click()
        //     cy.get('.breadcrumb > :nth-child(1)').click()
        //     cy.get('[role="listitem"][data-course-id="8418"] > [tabindex="-1"] > .card-img').click()
        //     cy.contains('Câu hỏi ôn tập Chương 1').click();
        //     cy.get('div.box.py-3.quizattempt').within(() => {
        //         cy.get('button.btn.btn-secondary').click();
        //     });
        //     cy.get('div').each(($div) => {
        //         // Check if the div contains exactly 4 radio buttons
        //         if ($div.find('input[type="radio"]').length === 4) {
        //         // Select a random radio button within the div
        //         cy.wrap($div).find('input[type="radio"]').eq(Math.floor(Math.random() * 4)).click();
        //         }})
        //     cy.contains('Hoàn thành bài thi...').click()
        //     cy.wait(1000)
        //     cy.contains('Nộp bài và kết thúc').click()
        //     cy.wait(1000)
        //     cy.get('div[role="dialog"]').find('.btn.btn-primary').click();
        //     cy.get('td.cell > :nth-child(1)').then(($span) =>{
        //         let score = $span.text();
        //         cy.log(score);
        //         })
        //     cy.wait(1000)
        //     cy.scrollTo(0,5000)
        //     cy.contains('Dừng xem lại').click();
        //   }
    })
})