import styles from "./Skill.module.scss";

const Skill = ({ name, isImportant }) => <li className={`${styles.skill} ${isImportant ? styles.important : ''}`} data-testid="skill">{name}</li>;

export default Skill;
