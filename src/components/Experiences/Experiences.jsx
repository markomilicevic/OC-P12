import Experience from "../Experience";
import styles from "./Experiences.module.scss";

const Experiences = ({ list }) => (
	<ul className={styles.experiences}>
		{list.map((experience) => (
			<Experience
				key={experience.name}
				name={experience.name}
				organization={experience.organization}
				description={experience.description}
				skills={experience.skills}
			/>
		))}
	</ul>
);

export default Experiences;
