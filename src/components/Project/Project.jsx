import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

import styles from "./Project.module.scss";

const Project = ({ project }) => {
	const { showModal } = useContext(ModalContext);

	return (
		<li className={styles.project} onClick={(event) => showModal(project)} data-testid="project-link">
			<img src={project.previewImageURL} alt={project.name} />
		</li>
	);
};

export default Project;
