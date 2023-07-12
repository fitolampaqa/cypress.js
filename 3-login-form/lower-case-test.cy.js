describe('Проверка на приведение к строчным буквам в логине на сайте login.qa.studio', () => {
    it('Ввод логина с заглавными буквами, правильного пароля и нажатие кнопки "Войти"', () => {
      cy.visit('https://login.qa.studio'); // Переходим на страницу авторизации
  
      cy.get('#mail').type('GerMan@dolnikov.ru'); // Вводим правильный логин с заглавными буквами
      cy.get('#pass').type('iLoveqastudio1'); // Вводим правильный пароль
  
      cy.get('#loginButton').click(); // Нажимаем кнопку "Войти"
  
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие кнопки крестик
      cy.contains('Авторизация прошла успешно').should('be.visible'); // Проверяем наличие нужного текста после авторизации
    });
  });