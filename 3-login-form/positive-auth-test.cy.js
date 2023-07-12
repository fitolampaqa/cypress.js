describe('Проверка авторизации на сайте login.qa.studio', () => {
    it('Ввод правильного логина, правильного пароля и нажатие кнопки "Войти"', () => {
      cy.visit('https://login.qa.studio'); // Переходим на страницу авторизации
  
      cy.get('#mail').type('german@dolnikov.ru'); // Вводим правильный логин
      cy.get('#pass').type('iLoveqastudio1'); // Вводим правильный пароль
  
      cy.get('#loginButton').click(); // Нажимаем кнопку "Войти"
  
      cy.contains('Авторизация прошла успешно').should('be.visible'); // Проверяем наличие нужного текста после авторизации
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие кнопки крестик
    });
  });