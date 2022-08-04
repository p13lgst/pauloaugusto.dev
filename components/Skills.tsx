import Image from "next/image";
import styles from "../styles/Skills.module.sass";
import SkillsImage from "../public/skills-image.svg";
import Skill from "./Skill";

const skills = {
  React: 95,
  "Next.js": 90,
  TypeScript: 80,
  JavaScript: 80,
  "Tailwind CSS": 80,
  CSS: 80,
  Git: 75,
  HTML: 70,
  Sass: 70,
  Prisma: 70,
  "Node.js": 60,
  Express: 60,
  Python: 60,
  MongoDB: 50,
  PostgreSQL: 50,
  GraphQL: 40,
  Django: 30,
  AWS: 30,
};

const Skills = () => (
  <div className={styles.skills}>
    <h1 className={styles.heading}>Skills</h1>
    {Object.entries(skills).map(([name, level]) => (
      <Skill key={name} name={name} level={level} />
    ))}
    <div className={styles.image}>
      <Image src={SkillsImage} alt="" layout="responsive" />
    </div>
  </div>
);

export default Skills;
