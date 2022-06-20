import openPage from "../pageobjects/open.page";
import { dataCredit } from "../data/data";

describe("Midtrans Web Test", async function () {
    it("should success to use the web using 3ds VISA", async () => {
        await openPage.proccess3ds({
            ...dataCredit,
            cc: "4811111111111114"
        });
        await browser.switchToParentFrame();
    });
    it("should failed to use the web using 3ds VISA", async () => {
        await openPage.proccess3ds({
            ...dataCredit,
            cc: "4911111111111113"
        });
        await browser.switchToParentFrame();
    });
    it("should success to use the web using No 3ds VISA", async () => {
        await openPage.proccessNo3ds({
            ...dataCredit,
            cc: "4411111111111118"
        });
        await browser.switchToParentFrame();
    });
    it("should failed to use the web using No 3ds VISA", async () => {
        await openPage.proccessNo3ds({
            ...dataCredit,
            cc: "4611111111111116"
        });
        await browser.switchToParentFrame();
    });


    it("should success to use the web using 3ds MASTERCARD", async () => {
        await openPage.proccess3ds({
            ...dataCredit,
            cc: "5211111111111117"
        });
        await browser.switchToParentFrame();
    });
    it("should failed to use the web using 3ds MASTERCARD", async () => {
        await openPage.proccess3ds({
            ...dataCredit,
            cc: "5111111111111118"
        });
        await browser.switchToParentFrame();
    });
    it("should success to use the web using No 3ds MASTERCARD", async () => {
        await openPage.proccessNo3ds({
            ...dataCredit,
            cc: "5410111111111116"
        });
        await browser.switchToParentFrame();
    });
    it("should failed to use the web using No 3ds MASTERCARD", async () => {
        await openPage.proccessNo3ds({
            ...dataCredit,
            cc: "5410111111111116"
        });
        await browser.switchToParentFrame();
    });
    

    it("should success to use the web using 3ds JCB", async () => {
        await openPage.proccess3ds({
            ...dataCredit,
            cc: "3528203324564357"
        });
        await browser.switchToParentFrame();
    });
    it("should failed to use the web using 3ds JCB", async () => {
        await openPage.proccess3ds({
            ...dataCredit,
            cc: "3528512944932269"
        });
        await browser.switchToParentFrame();
    });
    it("should success to use the web using No 3ds JCB", async () => {
        await openPage.proccessNo3ds({
            ...dataCredit,
            cc: "3528868047864225"
        });
        await browser.switchToParentFrame();
    });
    it("should failed to use the web using No 3ds JCB", async () => {
        await openPage.proccessNo3ds({
            ...dataCredit,
            cc: "3528185267171623"
        });
        await browser.switchToParentFrame();
    });

    it("should success to use the web using 3ds AMEX", async () => {
        await openPage.proccess3ds({
            ...dataCredit,
            cc: "370192169722458"
        });
        await browser.switchToParentFrame();
    });
    it("should failed to use the web using 3ds AMEX", async () => {
        await openPage.proccess3ds({
            ...dataCredit,
            cc: "374296354400881"
        });
        await browser.switchToParentFrame();
    });
    it("should success to use the web using No 3ds AMEX", async () => {
        await openPage.proccessNo3ds({
            ...dataCredit,
            cc: "373747726661940"
        });
        await browser.switchToParentFrame();
    });
    it("should failed to use the web using No 3ds AMEX", async () => {
        await openPage.proccessNo3ds({
            ...dataCredit,
            cc: "378096218340018"
        });
        await browser.switchToParentFrame();
    });
});

