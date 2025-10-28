
import { test, expect } from '@playwright/test';
import { clear } from 'console';

test.beforeEach( async({page}) => {
  await page.goto('https://petclinic.bondaracademy.com/')
})

test('Locators' , async ({page}) => {

    //1.Select the PET TYPES menu item in the navigation bar and verify the Pet Types tab is displayed
  await page.locator('[tclass="glyphicon glyphicon-heart"]').isVisible();

  //2. Verify (Add assertion) of the "Pet Types" text displayed above the table with the list of pet types
  await page.goto('https://petclinic.bondaracademy.com/pettypes');
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible();
  //await page.getByRole('link', { name: 'Pet Types' }).click();
  

 //3. Click on "Edit" button for the "cat" pet type


 await page.getByRole('row', { name: 'cat' }).getByRole('button', { name: 'Edit' }).click();
 
 //4. Verify (Add assertion)  of the "Edit Pet Type" text displayed
  await expect(page.getByRole('heading', { name: 'Edit Pet Type' })).toBeVisible();



 //5. Change the pet type name from "cat" to "rabbit" and click "Update" button

 await page.locator('#name').click()
 await page.locator('#name').clear()
 await page.locator('#name').fill('rabbit');
 await page.getByRole('button', { name: 'Update' }).click();



//6. Verify (Add assertion) that the first pet type in the list of types has a value "rabbit"

 await expect(page.getByRole('row', { name: 'rabbit' })).toBeVisible(); 


//7. Click on "Edit" button for the same "rabbit" pet type

 await page.getByRole('row', { name: 'rabbit' }).getByRole('button', { name: 'Edit' }).click();


//8. Change the pet type name back from "rabbit" to "cat" and click "Update" button

 await page.locator('#name').click()
 await page.locator('#name').clear()
 await page.locator('#name').fill('cat');
 await page.getByRole('button', { name: 'Update' }).click();


//9. Verify (Add assertion) that the first pet type in the list of names has a value "cat

 await expect(page.getByRole('row', { name: 'cat' })).toBeVisible();








})
