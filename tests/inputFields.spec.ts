import { test, expect } from '@playwright/test';
import { time } from 'console';

test.beforeEach(async ({ page }) => {
  await page.goto('https://petclinic.bondaracademy.com/');
});

test('Home page is opened and Welcome message is displayed', async ({ page }) => {
  await expect(page.locator('.title')).toHaveText('Welcome to Petclinic');
});


  //TEST CASE 1 --------------------------------------------------------------------------------------------------------------------------

test('Test case 1: Update pet type', async ({ page }) => {
  // Navigate to Pet Types page
  //Select the PET TYPES menu item in the navigation bar

  await page.getByRole('link', { name: 'Pet Types' }).click();
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible();

  // Verify initial cat entry exists
  await expect(page.getByRole('row', { name: 'cat' })).toBeVisible();

  // .Change the pet type name from "cat" to "rabbit" and click "Update" button
  //  Click on "Edit" button for the "cat" pet type
  await page.getByRole('row', { name: 'cat' }).getByRole('button', { name: 'Edit' }).click();
  await expect(page.getByRole('heading', { name: 'Edit Pet Type' })).toBeVisible();
  await page.locator('#name').clear();

  // Add the assertion that the first pet type in the list of types has a value "rabbit"
   await page.locator('#name').fill('rabbit');
   await expect(page.locator('#name')).toHaveValue('rabbit');
  
  // Click on "Edit" button for the same "rabbit" pet type
  await page.getByRole('button', { name: 'Update' }).click();
   
  await page.locator('#name').clear();

  //Change the pet type name back from "rabbit" to "cat" and click "Update" button
  //Add the assertion that the first pet type in the list of names has a value "cat" 

  
   await page.locator('#name').fill('cat');
   await expect(page.locator('#name')).toHaveValue('cat');


});

  //TEST CASE 2--------------------------------------------------------------------------------------------------------------------------

test('Test case 2: Cancel pet type update', async ({ page }) => {
  await page.getByRole('link', { name: 'Pet Types' }).click();
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible();


  //TEST CASE 3

// Select the PET TYPES menu item in the navigation bar
// Add assertion of the "Pet Types" text displayed above the table with the list of pet types
// Click on "Edit" button for the "dog" pet type
  await page.getByRole('row', { name: /dog/i }).getByRole('button', { name: 'Edit' }).click();
// Type the new pet type name "moose"

  await page.locator('#name').fill('moose');
// Add assertion the value "moose" is displayed in the input field of the "Edit Pet Type" page
 await expect(page.locator('#name')).toHaveValue('moose');

 //  Click on "Cancel" button
await page.getByRole('button', { name: 'Cancel' }).click();

// Add the assertion the value "dog" is still displayed in the list of pet types
  await expect(page.getByRole('row', { name: /dog/i })).toBeVisible();
});

    
  //TEST CASE 3--------------------------------------------------------------------------------------------------------------------------

test('Test case 3: Pet type name is required validation', async ({ page }) => {
  // 1. Select the PET TYPES menu item in the navigation bar
  await page.getByRole('link', { name: 'Pet Types' }).click();

  // 2. Assert "Pet Types" text is displayed
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible();

  // 3.  Click on "Edit" button for the "lizard" pet type
  await page.getByRole('row', { name: 'lizard' }).getByRole('button', { name: 'Edit' }).click();
  await page.waitForTimeout(5000);

  // 4. On the Edit Pet Type page, clear the input field
    await page.locator('#name').clear();
 
    // 5. Click Update button to trigger validation
  await page.getByRole('button', { name: 'Update' }).click();
  await page.waitForTimeout(5000);
  
  // 6. Verify the "Name is required" message below the input field
  await expect(page.getByText('Name is required')).toBeVisible();
  
  // 7. Vetify the Edit Pet Type page is still displayed
  await expect(page.getByRole('heading', { name: 'Edit Pet Type' })).toBeVisible();

  // 8. Click Cancel button
  await page.getByRole('button', { name: 'Cancel' }).click();

  // 9. Verify that the "Pet Types" page is displayed
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible();
});
















