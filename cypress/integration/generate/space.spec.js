describe('代码生成Space组件', () => {
  it('拖拽到容器内', () => {
    cy.visit('http://localhost:8000/generate');
    cy.contains('33').then(aa => {
      cy.contains('11').drag(aa);
    });
  });
});
