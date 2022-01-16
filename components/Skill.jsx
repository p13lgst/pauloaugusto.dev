import styles from '../styles/Skill.module.sass';

const SkillBar = ({ level }) => {
    const width = `${level}%`;
    return (
        <div className={styles.bar}>
            <div className={styles.level} style={{ width }} />
        </div>
    );
};

const Skill = ({ name, level }) => {
    return (
        <div className={styles.skill}>
        <div className={styles.name}>{name}</div>
        <SkillBar level={level} />
        </div>
    );
};

export default Skill;
