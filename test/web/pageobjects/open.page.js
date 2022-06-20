class openPage {
    get btnBuy() {
        return $("//a[@class='btn buy']");
    }
    
    get btnCheckOut() {
        return $("//div[@class='cart-checkout']");
    }

    get btnCredit() {
        return $("//a[@href='#/credit-card']");
    }

    get inputCredit() {
        return $("//input[@autocomplete='cc-number']");
    }

    get inputExp() {
        return $("#card-expiry");
    }

    get inputcvv() {
        return $("#card-cvv");
    }

    get btnPayment() {
        return $("//button[@class='btn full primary']");
    }

    get inputCode() {
        return $("//input[@id='PaRes']");
    }

    get btnEnd() {
        return $("//button[@name='ok']");
    }

    async proccess3ds(data) {
        await browser.url('https://demo.midtrans.com/');
        await this.btnBuy.waitForDisplayed();
        await this.btnBuy.click();
        await browser.pause(1000);
        await this.btnCheckOut.waitForDisplayed();
        await this.btnCheckOut.click();
        await browser.pause(1000);
        await browser.switchToFrame(0);
        await this.btnCredit.waitForDisplayed();
        await this.btnCredit.click();
        await this.inputCredit.waitForDisplayed();
        await this.inputCredit.setValue(data.cc);
        await this.inputExp.setValue(data.expiry);
        await this.inputcvv.setValue(data.cvv);
        await this.btnPayment.click();
        await browser.pause(1000);
        await browser.switchToFrame(0);
        await this.inputCode.waitForDisplayed();
        await this.inputCode.setValue(data.otp);
        await this.btnEnd.click();
        await browser.pause(1000);
    }
    async proccessNo3ds(data){
        await browser.url('https://demo.midtrans.com/');
        await this.btnBuy.waitForDisplayed();
        await this.btnBuy.click();
        await browser.pause(1000);
        await this.btnCheckOut.waitForDisplayed();
        await this.btnCheckOut.click();
        await browser.pause(1000);
        await browser.switchToFrame(0);
        await this.btnCredit.waitForDisplayed();
        await this.btnCredit.click();
        await this.inputCredit.waitForDisplayed();
        await this.inputCredit.setValue(data.cc);
        await this.inputExp.setValue(data.expiry);
        await this.inputcvv.setValue(data.cvv);
        await this.btnPayment.click();
        await browser.pause(1000);
        await browser.switchToFrame(0);
    }
}

export default new openPage();