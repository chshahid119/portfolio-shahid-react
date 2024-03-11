import Headings from "./sub-components/Headings";

export default function WorkExp() {
  return (
    <div className="workExp">
      <Headings>My Working Experience</Headings>
      <div className="workExp__container">
        <ExperienceList />
        <ExperienceList />
      </div>
    </div>
  );
}

function ExperienceList() {
  return <>Hello</>;
}
