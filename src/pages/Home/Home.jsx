import Nav from "../../components/Nav";
import Skills from "../../components/Skills";
import model from "../../model.js";
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

			<section id="skills" className={`${styles.section} ${styles.skills}`}>
				<h2>Skills</h2>

				<p>I'm immediately efficient on:</p>
				<Skills list={model.hardSkills} />

				<p>My values are:</p>
				<Skills list={model.softSkills} />
			</section>
		</div>
	);
};

export default Home;
