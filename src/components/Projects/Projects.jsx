import Project from "../Project";
import styles from "./Projects.module.scss";

const Projects = ({ list }) => (
	<ul className={styles.projects}>
		{list.map((project) => (
			<Project key={project.name} project={project} />
		))}
	</ul>
);

export default Projects;
