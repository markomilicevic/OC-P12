import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectModal from "../../components/ProjectModal";
import styles from "./Page.module.scss";

const Page = ({ children }) => {
	const { isModalOpened, modalData } = useContext(ModalContext);
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />

			{isModalOpened && <ProjectModal project={modalData} />}
		</>
	);
};

export default Page;
