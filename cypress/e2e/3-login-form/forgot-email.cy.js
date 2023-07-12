describe('Проверка логики восстановления пароля на сайте login.qa.studio', () => {
    it('Нажатие кнопки "Забыли пароль?", ввод случайного e-mail и проверка наличия нужного текста', () => {
      cy.visit('https://login.qa.studio'); // Переходим на страницу авторизации
  
      cy.get('#forgotEmailButton').click(); // Нажимаем кнопку "Забыли пароль?"
      
      cy.get('#mailForgot').type('german@dolnikov.ru'); // Вводим случайный логин
      cy.get('#restoreEmailButton').click(); // Нажимаем кнопку "Отправить код"

      cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); // Проверяем наличие нужного текста после нажатия кнопки восстановления пароля
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие кнопки крестик
    });
  });