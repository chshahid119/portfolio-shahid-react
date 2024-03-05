function Logo() {
  const CodeBracket = "< ";
  const CodeBracketClose = " >";
  return (
    <div className="Logo">
      <div className="Logo-log">
        <p> {CodeBracket}</p>
        <h1>Shahid</h1>
        <p>{CodeBracketClose}</p>
      </div>
      <div className="Logo-icons">
        <ion-icon name="sunny-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Logo;
