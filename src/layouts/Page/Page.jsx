import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Page.module.scss";

const Page = ({ children }) => (
	<>
		<Header />
		<main className={styles.main}>{children}</main>
		<Footer />
	</>
);

export default Page;
