import styles from './Nav.module.scss';

const Nav = () => (
	<nav className={styles.nav}>
		<ul>
			<li>
				<a href="#introduction">Introduction</a>
			</li>
			<li>
				<a href="#skills">Skills</a>
			</li>
			<li>
				<a href="#portfolio">Portfolio</a>
			</li>
			<li>
				<a href="#experiences">Experiences</a>
			</li>
		</ul>
	</nav>
);

export default Nav;
