describe('Проверка некорректной авторизации на сайте login.qa.studio', () => {
    it('Ввод правильного логина, неправильного пароля и нажатие кнопки "Войти"', () => {
      cy.visit('https://login.qa.studio'); // Переходим на страницу авторизации
  
      cy.get('#mail').type('german@dolnikov.ru'); // Вводим правильный логин
      cy.get('#pass').type('jndfkjnvkj'); // Вводим неправильный пароль
  
      cy.get('#loginButton').click(); // Нажимаем кнопку "Войти"
  
      cy.contains('Такого логина или пароля нет').should('be.visible'); // Проверяем наличие нужного текста после авторизации
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие кнопки крестик

      cy.get('#exitMessageButton > .exitIcon').click(); // Нажимаем кнопку крестик
    });

    it('Ввод неправильного логина, правильного пароля и нажатие кнопки "Войти"', () => {
      cy.visit('https://login.qa.studio'); // Переходим на страницу авторизации
  
      cy.get('#mail').type('jdfnvjdf@mail.ru'); // Вводим неправильный логин
      cy.get('#pass').type('iLoveqastudio1'); // Вводим правильный пароль
  
      cy.get('#loginButton').click(); // Нажимаем кнопку "Войти"
  
      cy.contains('Такого логина или пароля нет').should('be.visible'); // Проверяем наличие нужного текста после авторизации
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие кнопки крестик

      cy.get('#exitMessageButton > .exitIcon').click(); // Нажимаем кнопку крестик
    });

    it('Ввод логина без @, правильного пароля и нажатие кнопки "Войти"', () => {
      cy.visit('https://login.qa.studio'); // Переходим на страницу авторизации
  
      cy.get('#mail').type('germandolnikov'); // Вводим невалидный логин
      cy.get('#pass').type('iLoveqastudio1'); // Вводим правильный пароль
  
      cy.get('#loginButton').click(); // Нажимаем кнопку "Войти"
  
      cy.contains('Нужно исправить проблему валидации').should('be.visible'); // Проверяем наличие нужного текста после авторизации
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие кнопки крестик
  });
});