import Nav from "../../components/Nav";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Experiences from "../../components/Experiences";
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

			<section id="portfolio" className={`${styles.section} ${styles.portfolio}`}>
				<h2>Portfolio</h2>

				<p>Recent projects — Click to expand:</p>
				<Projects list={model.projects} />
			</section>

			<section id="experiences" className={`${styles.section} ${styles.experiences}`}>
				<h2>Experiences</h2>

				<p>From the most recent to oldest:</p>
				<Experiences list={model.experiences} />
			</section>
		</div>
	);
};

export default Home;
