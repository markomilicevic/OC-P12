import styles from "./CTA.module.scss";

// CTA is for Call-To-Action
const CTA = ({ href, children }) => (
	<a className={styles.cta} href={href} target="_blank" rel="noreferrer">
		{children}
	</a>
);

export default CTA;
