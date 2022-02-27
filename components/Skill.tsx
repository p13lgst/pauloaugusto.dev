import styles from '../styles/Skill.module.sass';

interface SkillProps {
    name: string;
    level: number;
}

interface SkillBarProps {
    level: number;
}

const SkillBar = ({ level }: SkillBarProps) => {
    const width = `${level}%`;
    return (
        <div className={styles.bar}>
            <div className={styles.level} style={{ width }} />
        </div>
    );
};

const Skill = ({ name, level }: SkillProps) => {
    return (
        <div className={styles.skill}>
        <div className={styles.name}>{name}</div>
        <SkillBar level={level} />
        </div>
    );
};

export default Skill;
