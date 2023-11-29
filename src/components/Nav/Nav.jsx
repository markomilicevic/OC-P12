import styles from './Nav.module.scss';

const Nav = () => (
	<nav className={styles.nav}>
		<ul>
			<li>
				<a href="#introduction">Introduction</a>
			</li>
		</ul>
	</nav>
);

export default Nav;
