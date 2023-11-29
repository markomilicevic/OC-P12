import Skills from "../Skills";
import styles from "./Experience.module.scss";

const Experience = ({ name, organization, description, skills }) => (
	<li className={styles.experience}>
		<h3>{name}</h3>
		<h4>{organization}</h4>
		<div className={styles.description}>
			{description.split("\n").map((line, index) => (
				<span key={index}>{line}</span>
			))}
		</div>
		<div className={styles.skills}>
			<Skills list={skills} />
		</div>
	</li>
);

export default Experience;
