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

	it("navigate trough the projects by the pointer", async () => {
		await page.goto("http://localhost:3000");
		await page.waitForSelector('[data-testid="project-link"]');

		// Click on the first project
		await page.click('[data-testid="project-link"]:first-child');

		// Wait for the modal opened
		await page.waitForFunction(() => document.querySelector('[data-testid="project-modal"]'));

		// Close the modal
		await page.click('[data-testid="close-modal-icon"]');

		// Wait for the modal closed
		await page.waitForFunction(() => !document.querySelector('[data-testid="project-modal"]'));
	});

	it("navigate trough the projects by the keyboard", async () => {
		await page.goto("http://localhost:3000");
		await page.waitForSelector('[data-testid="project-link"]');

		// Click on the first project
		await page.click('[data-testid="project-link"]:first-child');

		// Wait for the modal opened
		await page.waitForFunction(() => document.querySelector('[data-testid="project-modal"]'));

		// Close the modal
		await page.keyboard.press("Escape");

		// Wait for the modal closed
		await page.waitForFunction(() => !document.querySelector('[data-testid="project-modal"]'));
	});

	afterEach(() => browser.close());
});
