import { useContext, useEffect } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import Skills from "../Skills";
import styles from "./ProjectModal.module.scss";
import external from "./external.svg";

const ProjectModal = ({ project }) => {
	const { closeModal } = useContext(ModalContext);

	useEffect(() => {
		document.onkeydown = (event) => {
			if (event.key === "Escape") {
				closeModal();
			}
		};
	}, [closeModal]);

	return (
		<div data-testid="project-modal" className={styles.modal}>
			<div
				className={styles.modalLayer}
				onClick={(event) => {
					event.preventDefault();
					closeModal();
				}}
			></div>

			<div className={styles.modalContent}>
				<img src={project.fullSizeImageURL} alt={project.title} />

				<div className={styles.modalContentDetails}>
					<div className={styles.modalContentMain}>
						<p className={styles.modalContentName}>{project.name}</p>
						<p className={styles.modalContentDescription}>{project.description}</p>
						<Skills list={project.skills} />
					</div>
					<div className={styles.modalContentSecondary}>
						<a href={project.siteURL} target="_blank" rel="noreferrer">
							<img src={external} alt="External link" width="45" height="45" />
							<strong>{project.siteType === 'live' ? 'See demo' : 'See code'}</strong>
						</a>
					</div>
				</div>
				<button data-testid="close-modal-icon" className={styles.modalClose} title="Close" onClick={() => closeModal()}>
					✖
				</button>
			</div>
		</div>
	);
};

export default ProjectModal;
