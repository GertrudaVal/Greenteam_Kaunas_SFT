const { expect } = require("@playwright/test");

exports.LunchMainPage = class LunchMainPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://lunch.devbstaging.com");
  }

  async regularLogin() {
    await this.page.goto("https://lunch.devbstaging.com/login-password");
    const userEmail = "gertruda.valionyte@sourceryacademy.com";
    const userPassword = "nera svarbus26";        
    await this.page.fill('[aria-label="Email"]', userEmail);
    await this.page.fill('[aria-label="Password"]', userPassword);
    await this.page.click('text="Login"');
    
  }
  async regularLogin() {
    await this.page.goto("https://lunch.devbstaging.com/login-password");
    const userEmail = "gertruda.valionyte@sourceryacademy.com";
    const userPassword = "nera svarbus26";        
    await this.page.fill('[aria-label="Email"]', userEmail);
    await this.page.fill('[aria-label="Password"]', userPassword);
    await this.page.click('text="Login"');    
  }
  

  async pickDay(day) {
    
    await this.page.click(`text="${day}"`);    
  }

  async pickAmberGrillMonday() { //needs work. Could not find selector
    
    await this.page.click(".v-list__group:nth-child(1) > .v-list__group__items > div:nth-child(2) span");
  }

  async assertAndPickDish(dishName) { //padaryt array, kad keletas?
    
    await this.page.click(`text="${dishName}"`);

  }  
    
  

  async confirmOrder() { 
    
    await this.page.click(".orders-list-button > .v-btn__content"); 
    
  }
  
  async clearOrder() { 
    
    await this.page.click(".v-chip__content > .v-icon"); 
    
  }
  

  
};
