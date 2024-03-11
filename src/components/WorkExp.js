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
  return (
    <>
      <div className="workExp__container--frame">
        <div>
          <h3>Safeer-e-Makkah Travels</h3>
          <p>Sep 2019 - Feb 2020</p>
        </div>
      </div>
      <div className="workExp__container--description">
        <div className="workExp__container--description-li">
          <div>&nbsp;</div>
          <h3>Ticketing Manager</h3>
          <p>
            Work as ticketing manager in Safeer-e-Makkah Travel and Tours
            Private Limited. Control All tickets management across various
            platforms.
          </p>
        </div>
      </div>
    </>
  );
}
