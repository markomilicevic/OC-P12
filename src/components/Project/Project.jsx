import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

import styles from "./Project.module.scss";

const Project = ({ project }) => {
	const { showModal } = useContext(ModalContext);

	return (
		<li className={styles.project}>
			<a
				href="/"
				onClick={(event) => {
					event.preventDefault();
					showModal(project);
				}}
				data-testid="project-link"
			>
				<img src={project.previewImageURL} alt={project.name} />
			</a>
		</li>
	);
};

export default Project;
