export default function Filters() {
  return (
    <div className="filters">
      <div className="filters__container">
        <p>All</p>
        <p>Recent</p>
        <p>Front-End UI</p>
        <p>Full-Stack</p>
        <p>Data Science</p>
        <select>
          <option defaultValue={"Select by Category"}>
            Select by Category
          </option>
          <option value="Next">Next</option>
          <option value="React">React</option>
          <option value="JavaScript">Vanilla JavaScript</option>
          <option value="SASS">SASS</option>
          <option value="CSS">CSS</option>
        </select>
      </div>
    </div>
  );
}
