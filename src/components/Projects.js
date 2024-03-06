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
  {
    name: "amazon",
    description: "react js React hooks",
  },
  {
    name: "amazon",
    description: "react js React hooks",
  },
  {
    name: "amazon",
    description: "react js React hooks",
  },
  {
    name: "amazon",
    description: "react js React hooks",
  },
  {
    name: "amazon",
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
      {projectData.map((data) => (
        <Card data={data} />
      ))}
    </div>
  );
}

function Card({ card }) {
  console.log(card);
  return (
    <>
      <div className="projects__cards">
        <a href="#">
          <img projects__cards-img src={Image} alt="image description" />
          <h2>Discord Clone</h2>

          <div className="projects__cards-skillUsed">
            <p>HTML</p> <p>CSS</p> <p>JavaScript</p> <p>JavaScript</p>{" "}
            <p>JavaScript</p>
            <p>JavaScript</p>
          </div>
        </a>
      </div>
    </>
  );
}
