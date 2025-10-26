import { test, expect } from '@playwright/test';
import { time } from 'console';
import { TIMEOUT } from 'dns';

 test.beforeEach( async({page}) => {
  await page.goto('https://petclinic.bondaracademy.com/')
})

 
 test('Home page is opened and Welcome message is displayed', async ({page}) => {
  await expect(page.locator('.title')).toHaveText('Welcome to Petclinic')

});


test(' Test case1: Update pet type', async ({page}) => {
    
  //1.Select the PET TYPES menu item in the navigation bar and verify the Pet Types tab is displayed
  await page.locator('[tclass="glyphicon glyphicon-heart"]').isVisible();
  await page.getByRole('link', { name: 'Pet Types' }).click();


  //2. Verify (Add assertion) of the "Pet Types" text displayed above the table with the list of pet types

  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible();
  //await page.getByRole('link', { name: 'Pet Types' }).click();
  

  //3. Click on "Edit" button for the "rabbit" pet type
  

  const rabbitRow = page.locator('table tbody tr').filter({ hasText: 'rabbit' }).first();
  await expect(rabbitRow).toBeVisible();
  await rabbitRow.getByRole('row', { name: 'Edit' }).click();
 
  //4. Verify (Add assertion)  of the "Edit Pet Type" text displayed
  await expect(page.getByRole('heading', { name: 'Edit Pet Type' })).toBeVisible();


 

  //5. Change the pet type name from "rabbit" to "cat" and click "Update" button

  await page.locator('#name').click()

  await page.locator('#name').clear()
 
  await page.locator('#name').fill('cat');

  await page.getByRole('button', { name: 'Update' }).click();



   //6. Verify (Add assertion) that the first pet type in the list of types has a value "rabbit"
   
    await page.locator('#id="0"').click()
    await expect(page.getByRole('row', { name: 'cat' })).toBeVisible(); 


   //7. Click on "Edit" button for the same "cat" pet type

   await page.getByRole('row', { name: 'cat' }).getByRole('button', { name: 'Edit' }).click();


  //8. Change the pet type name back from "cat" to "rabbit" and click "Update" button

   await page.locator('#name').click()
   await page.locator('#name').clear()
   await page.locator('#name').fill('rabbit');
   await page.getByRole('button', { name: 'Update' }).click();


  //9. Verify (Add assertion) that the first pet type in the list of names has a value "cat
   
   await expect(page.getByRole('row', { name: 'rabbit' })).toBeVisible();

 });
 

  //Test Case 2: Cancel pet type update
  test(' Test case2: Cancel pet type update', async ({page}) => {
  // 1. Select the PET TYPES menu item in the navigation bar
  await page.getByRole('link', { name: 'Pet Types' }).click();

  // 2. Add assertion of the "Pet Types" text displayed above the table with the list of pet types
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible();

  // 3. Click on "Edit" button for the "dog" pet type
  await page.getByRole('row', { name: 'dog' }).getByRole('button', { name: 'Edit' }).click();

  // 4. Type the new pet type name "moose"
  await page.locator('#name').fill('moose');

  // 5. Add assertion the value "moose" is displayed in the input field of the "Edit Pet Type" page
  await expect(page.locator('#name')).toHaveValue('moose');

  // 6. Click on "Cancel" button
  await page.getByRole('button', { name: 'Cancel' }).click();

  // 7. Add the assertion the value "dog" is still displayed in the list of pet types
  await expect(page.getByRole('row', { name: 'dog' })).toBeVisible();
});



    
//Test Case 3: Pet type name is required validation

//1. Select the PET TYPES menu item in the navigation bar
//2. Add assertion of the "Pet Types" text displayed above the table with the list of pet types
//3. Click on "Edit" button for the "lizard" pet type
//4. On the Edit Pet Type page, clear the input field
//5. Add the assertion for the "Name is required" message below the input field
//6. Click on "Update" button
//7. Add assertion that "Edit Pet Type" page is still displayed
//8. Click on the "Cancel" button
//9. Add assertion that "Pet Types" page is displayed























