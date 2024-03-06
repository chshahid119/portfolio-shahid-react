import Image from "../img/react.jpeg";
const projectData = [
  {
    name: "netflix",
    description: "react js React hooks",
  },
  {
    name: "amazon",
    description: "react js React hooks",
  },
];
export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__cards">
        <a href="#">
          <img projects__cards-img src={Image} alt="image description" />
          <h2>Discord Clone</h2>
          <p>
            this project contains all the functionalities of discord with its
            all functionalities etc are here.
          </p>
          <div className="projects__cards-skillUsed">
            <p>HTML</p> <p>HTML</p> <p>HTML</p>
          </div>
        </a>
      </div>
    </div>
  );
}
