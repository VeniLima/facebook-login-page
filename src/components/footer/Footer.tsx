import "./styles.css";

export function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="languages">
          <a href="#">Português (Brasil)</a>
          <a href="#">English (US)</a>
          <a href="#">Español</a>
          <a href="#">Français (France)</a>
          <a href="#">Italiano</a>
          <a href="#">Deutsch</a>
          <a href="#">العربية</a>
          <a href="#">हिन्दी</a>
          <a href="#">中文(简体)</a>
          <a href="#">日本語</a>
          <button className="buttonAdd">+</button>
        </div>
        <hr></hr>
        <div className="functions"></div>
      </div>
    </footer>
  );
}
