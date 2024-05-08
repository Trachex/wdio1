describe("Webdriver suite", () => {

    it("Should create new paste", async () => {
        await browser.url("https://pastebin.com/");

        const textarea = await $('textarea#postform-text');
        textarea.click();
        await textarea.setValue('Hello from WebDriver');

        const pasteExp = await $('/html/body/div[1]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[4]/div');
        pasteExp.click();
        await browser.pause(300);
        const timeOpt = await $('/html/body/span[2]/span/span[2]/ul/li[3]');
        timeOpt.click();

        const pasteTitle = await $('//*[@id="postform-name"]');
        pasteTitle.click();
        await pasteTitle.setValue('helloweb');

        const createBtn = await $('/html/body/div[1]/div[2]/div[1]/div[2]/div/form/div[5]/div[1]/div[10]/button');
        createBtn.click();
    });
})