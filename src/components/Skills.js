const AllSkills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JAVASCRIPT" },
  { skill: "C++" },
];

export default function Skills() {
  return (
    <div>
      {AllSkills.map((skill, i) => (
        <Skill key={i} skill={skill} />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <>
      <div>
        <p>{skill.skill}</p>
      </div>
    </>
  );
}
