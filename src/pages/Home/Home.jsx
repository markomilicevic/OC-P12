import Nav from "../../components/Nav";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div data-testid="home-page">
			<Nav />

			<section id="introduction" className={`${styles.section} ${styles.introduction}`}>
				<h2>Introduction</h2>
				<p>
					As developer, my goal is to <strong>help organizations</strong> to <strong>solve complex problems</strong> with{" "}
					<strong>simple solutions</strong> for the <strong>best user experiences</strong>
				</p>
			</section>
		</div>
	);
};

export default Home;
