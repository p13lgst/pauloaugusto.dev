import Image from 'next/image';
import styles from '../styles/Skills.module.sass';
import SkillsImage from '../public/skills-image.svg';
import Skill from './Skill';

const skills = [
    { name: 'HTML', level: 70 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 60 },
    { name: 'Express', level: 60 },
    { name: 'MongoDB', level: 50 },
    { name: 'Python', level: 75 },
    { name: 'Django', level: 30 },
    { name: 'Git', level: 75 },
  ];

const Skills = () => (
    <div className={styles.skills}>
    <h1 className={styles.heading}>Skills</h1>
    {skills.map(skill => (
      <Skill key={skill.name} name={skill.name} level={skill.level} />
    ))}
    <div className={styles.image}>
      <Image src={SkillsImage} alt="" layout="responsive" />
    </div>
    
  </div>
)

export default Skills;