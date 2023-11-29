import { useEffect, useState } from "react";
import Skill from "../Skill";
import styles from "./Skills.module.scss";

const Skills = ({ list }) => {
	const [ascSortedList, setAscSortedList] = useState(list);

	useEffect(() => {
		const sorting = [...list];
		// Asc
		sorting.sort((a, b) => {
			if (a.name > b.name) {
				return 1;
			} else {
				return -1;
			}
		});
		setAscSortedList(sorting);
	}, [list]);

	if (!list || !list.length) {
		return <></>;
	}

	return (
		<ul data-testid="skills" className={styles.skills}>
			{ascSortedList.map((skill) => (
				<Skill key={skill.name} name={skill.name} isImportant={skill.isImportant} />
			))}
		</ul>
	);
};

export default Skills;
