import styles from "./Header.module.scss";

const Header = () => (
	<header className={styles.header}>
		<img src="/images/marko.jpg" alt="Portrait of Marko Milicevic" />
		<h1>Marko Milicevic</h1>
		<p>Senior Frontend Developer with 15+ years of experiences — Paris-based</p>
	</header>
);

export default Header;
