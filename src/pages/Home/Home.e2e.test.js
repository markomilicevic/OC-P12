import puppeteer from "puppeteer";

describe("Home page", () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
	});

	it("renders the page", async () => {
		await page.goto("http://localhost:3000");
		await page.waitForSelector('[data-testid="home-page"]');
	});

	afterEach(() => browser.close());
});
