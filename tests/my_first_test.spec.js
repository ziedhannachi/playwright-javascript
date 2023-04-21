const {test, expect} = require('@playwright/test')

test('My first test ', async ({page, context}) => {

    //await context.tracing.start({snapshots:true, screenshots:true})

    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.pause()
    await expect(page).toHaveTitle('Your store. Login')
    await page.locator('id=Email').fill('admin@yourstore.com')
    await page.locator('id=Password').fill('admin')
    await page.click('xpath=//button[@type="submit"]')
    await page.close()

    //await context.tracing.stop({path: 'test-trace.zip'});
})




