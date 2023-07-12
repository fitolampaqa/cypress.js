describe('Тестирование сайта https://huntingpony.com', () => {
    it('Открытие сайта', () => {
      cy.visit('https://huntingpony.com'); // Переходим на главную страницу сайта
      cy.get('[href="/collection/odezhda"] > .banner-list__item-title').click(); // Нажимаем на кнопку категории "Одежда"
      
      cy.get('[data-product-id="338935607"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click(); // Нажимаем на кнопку определенного товара
      
      cy.get('.option-values').should('be.visible'); // Проверяем наличие выпадающего списка размеров
      cy.get('.add-cart-counter__btn').click(); // Нажимаем на кнопку "В корзину"
      cy.get('[data-add-cart-counter-plus=""]').click(); // Нажимаем на кнопку "+"
      cy.get('.header__cart > .icon').click(); // Нажимаем на иконку корзины

      cy.get('.cart-controls > .button').should('be.visible'); // Проверяем наличие кнопки "Оформить заказ"
      cy.contains('Товары (2)').should('be.visible'); // Проверяем, что количество товара равно 2
    });
});