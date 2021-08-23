const { test, expect } = require("@playwright/test");
const { LunchMainPage } = require("../pages/lunchMainPage");



  test.describe("", () => {
    let page;
    test.beforeAll(async ({ browser }) => {
      page = await browser.newPage();
      startPage = new LunchMainPage(page);
    });

    test.beforeEach(async () => {
      //await startPage.goto(); 
      //removed, because it went to the login page for some reason
      
    });
    test("one time log in", async () => { //setup
      await startPage.regularLogin(); 
    });
    test("pick day and supplier", async () => { 
    await startPage.pickDay("Pirmadienis"); 
    //Only works with monday because of method issues
    await startPage.pickAmberGrillMonday();
      });
    test("create order", async () => { 
      await startPage.assertAndPickDish("Burgeris");      
      await startPage.confirmOrder();
        
    });
    test("check order history", async () => { 
      await startPage.checkOrderHistory("Burgeris");
              
    });


   
  });

