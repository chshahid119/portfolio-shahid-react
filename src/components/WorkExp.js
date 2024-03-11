import Headings from "./sub-components/Headings";

export default function WorkExp() {
  return (
    <div className="workExp">
      <Headings>My Working Experience</Headings>
      <div className="workExp__container">
        <ExperienceList />
      </div>
    </div>
  );
}

function ExperienceList() {
  return (
    <div className="experience">
      <div className="experience__timeFrame">sdfhklasjddf</div>
      <div className="experience__role">dsfasfas</div>
    </div>
  );
}
