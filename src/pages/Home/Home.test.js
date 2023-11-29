import React from "react";
import { render, screen } from "@testing-library/react";
import { ModalProvider } from "../../contexts/ModalContext";
import Home from "./Home";

describe("Home page", () => {
	it("renders the page", () => {
		render(
			<ModalProvider>
				<Home />
			</ModalProvider>
		);

		expect(screen.getByTestId("home-page")).toBeInTheDocument();
	});

	it("renders all sections", () => {
		render(
			<ModalProvider>
				<Home />
			</ModalProvider>
		);

		expect(document.getElementById("introduction")).toBeTruthy();
		expect(document.getElementById("skills")).toBeTruthy();
		expect(document.getElementById("portfolio")).toBeTruthy();
		expect(document.getElementById("experiences")).toBeTruthy();
	});
});
