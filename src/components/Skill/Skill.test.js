import React from "react";
import { render, screen } from "@testing-library/react";
import Skill from "./Skill";
import styles from "./Skill.module.scss";

describe("Skill component", () => {
	it("renders a standard skill", () => {
		const name = "Something";

		render(<Skill name={name} />);

		const skillElement = screen.queryByTestId("skill");
		expect(skillElement).toBeInTheDocument();
		expect(skillElement.textContent).toBe("Something");
		expect(skillElement.classList.contains(styles.important)).toBe(false);
	});

	it("renders an important skill", () => {
		const name = "Something";

		render(<Skill name={name} isImportant={true} />);

		const skillElement = screen.queryByTestId("skill");
		expect(skillElement).toBeInTheDocument();
		expect(skillElement.textContent).toBe("Something");
		expect(skillElement.classList.contains(styles.important)).toBe(true);
	});
});
