import Image from "../img/react.jpeg";
import NatoursImg from "../img/natours.PNG";
const projectData = [
  {
    name: "natours",
    skills: "SASS HTML CSSGRIDS",
    link: "https://tours-company-shahid.netlify.app/",
    image: NatoursImg,
  },
  {
    name: "netflix",
    description: "react js React hooks",
    link: "https://tours-company-shahid.netlify.app/",
    image: Image,
  },
  {
    name: "netflix",
    description: "react js React hooks",
    link: "https://tours-company-shahid.netlify.app/",
    image: "../img/react.jpeg",
  },
  {
    name: "netflix",
    description: "react js React hooks",
    link: "https://tours-company-shahid.netlify.app/",
    image: Image,
  },
];
export default function Projects() {
  return (
    <div className="projects">
      {projectData.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </div>
  );
}

function Card({ data }) {
  console.log(data);
  return (
    <>
      <div className="projects__cards">
        <img className="projects__cards-img" src={Image} alt={data.name} />
        <div className="projects__cards-intro">
          <h2>{data.name}</h2>
          <a href={data.link} target="_">
            Open
            <ion-icon name="navigate-outline"></ion-icon>
          </a>
        </div>
        <div className="projects__cards-skillUsed">
          <p>HTML</p> <p>CSS</p> <p>JavaScript</p> <p>JavaScript</p>{" "}
          <p>JavaScript</p>
          <p>JavaScript</p>
        </div>
      </div>
    </>
  );
}
