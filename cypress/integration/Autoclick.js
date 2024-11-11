/// <reference types="cypress" />
describe('Test with Page Objects', () => {
    let score = 0;
    beforeEach('login', () => {
        cy.clearCookies()
        cy.visit('/')
        cy.get('#username').type('K24DTCN218') 
        cy.get('#password').type('HelloWorld@2')
        //Thay tkhoan mkhau vao
        cy.get('#loginbtn').click()
    })
    it('autoclick', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.get('[class="card-deck dashboard-card-deck "]')
        //Auto click vào bài đầu tiên trong list Course review
        .find('[class="card dashboard-card"]').first().click()
        cy.contains('Câu hỏi ôn tập chương 2').click(); //Moi nguoi tu thay doi chuong nhe =))) auto cai nay met vcl
        cy.get('div.box.py-3.quizattempt').within(() => {
            cy.get('button.btn.btn-secondary').click();
        });
        cy.get('div').each(($div) => {
            // Check if the div contains exactly 4 radio buttons
            if ($div.find('input[type="radio"]').length === 4) {
              // Select a random radio button within the div
              cy.wrap($div).find('input[type="radio"]').eq(Math.floor(Math.random() * 4)).click();
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
        if(score < 5){
            cy.oncemoreplz()
        }
        else {
           return;
        }
    })
})