import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home page", () => {
	it("renders the page", () => {
		render(<Home />);

		expect(screen.getByTestId("home-page")).toBeInTheDocument();
	});

	it("renders all sections", () => {
		render(<Home />);

		expect(document.getElementById("introduction")).toBeTruthy();
		expect(document.getElementById("skills")).toBeTruthy();
	});
});
