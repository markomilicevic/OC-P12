import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills component", () => {
	it("renders nothing when no skill", () => {
		const list = [];

		render(<Skills list={list} />);

		expect(screen.queryByTestId("skills")).not.toBeInTheDocument();
	});

	it("renders sorted list of skill", () => {
		const list = [
			{
				name: "C",
			},
			{
				name: "A",
			},
			{
				name: "B",
			},
		];

		render(<Skills list={list} />);

		expect(screen.getByTestId("skills")).toBeInTheDocument();
        const skillElements = screen.queryAllByTestId("skill");
        expect(skillElements.length).toBe(3);
        const skillNames = skillElements.map((skillElement) => skillElement.textContent);
        expect(skillNames[0]).toBe('A');
        expect(skillNames[1]).toBe('B');
        expect(skillNames[2]).toBe('C');
	});
});
