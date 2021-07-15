import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro">
      <p className="introText">
        <span className="introTextFirstLetter">A</span> developer-turned Excel
        enthusiast. The joy of building things and solving problems creatively
        drove <a href="#">me</a> to pursue new opportunities.
      </p>
      <p className="introText">
        <span className="introTextFirstLetter">B</span>ackground in Information
        System Science and Environmental Management. See my{" "}
        <a target="_blank" href="http://www.google.fi" rel="noreferrer">
          resume
        </a>{" "}
        or{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/tero-ankkuri-751896145"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        for more details.
      </p>
      <p className="introText">
        <span className="introTextFirstLetter">C</span>oursing now towards a
        career in software development. Take a glance at some of my{" "}
        <a href="#">projects</a>.
      </p>
    </div>
  );
}
