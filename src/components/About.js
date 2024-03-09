const aboutMySelf = `Welcome to my portfolio! I'm a final year computer science student with a deep passion for technology.
   Specializing in front-end development, I excel in crafting dynamic and user-friendly interfaces
    using React.js and Next.js. As a Frontend Developer, I am dedicated to creating seamless digital
     experiences that captivate and engage users. Beyond front-end development, I am also a 
     fervent data science enthusiast. I thrive on exploring data-driven insights and leveraging 
     them to drive informed decision-making. With a commitment to innovation and continuous learning,
      I'm excited to showcase my skills and contribute to impactful projects. Explore my portfolio to 
      discover more about my work and projects.`;

export default function About() {
  return (
    <div className="about">
      <div className="about__message">{aboutMySelf}</div>
    </div>
  );
}
