import "./intro.scss";
import DevIcon from "devicon-react-svg";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      {/*       <h1>
        <span className="introHeaderLetter">T</span>
        <span className="introHeaderLetter">e</span>
        <span className="introHeaderLetter">r</span>
        <span className="introHeaderLetter">o </span>
        <span className="introHeaderLetter"> </span>
        <span className="introHeaderLetter">A</span>
        <span className="introHeaderLetter">n</span>
        <span className="introHeaderLetter">k</span>
        <span className="introHeaderLetter">k</span>
        <span className="introHeaderLetter">u</span>
        <span className="introHeaderLetter">r</span>
        <span className="introHeaderLetter">i</span>
      </h1> */}
      <h3>
        Hi, my name is Tero Ankkuri, and I'm looking for my first developer job.
        Hover over (or tap on mobile) the small boxes below to get bits of
        information about me!
      </h3>
      <div className="introBoxContainer">
        <div
          className="introBox"
          data-hover="A developer-turned Excel
        enthusiast. The joy of building things and solving problems creatively
        drove me to pursue new opportunities."
        >
          About
        </div>
        <div
          className="introBox"
          data-hover="B.Sc. in Information System Science, 2018 /// M.Sc. in Corporate Environmental Management, 2021"
        >
          Background
        </div>
        <div className="introBox" data-hover="">
          <a href="../../CV.pdf" target="_blank">
            CV
          </a>
        </div>
        <div className="introBox skills" data-hover="">
          <div style={{ position: "absolute" }}>Skills</div>
          <DevIcon icon="react" className="skillBox" />
          <DevIcon icon="javascript" className="skillBox" />
          <DevIcon icon="nodejs" className="skillBox" />
          <DevIcon icon="mongodb" className="skillBox" />
          <DevIcon icon="sass" className="skillBox" />
          <DevIcon icon="html5" className="skillBox" />
          <DevIcon icon="git" className="skillBox" />
          <i class="programming lang-javascript" />
        </div>
        <div
          className="introBox"
          data-hover="A position in which I could utilize my skills and foster my enthusiasm. I am by no means complete, but even more so, I'm eager and motivated to learn and grow."
        >
          Looking for
        </div>
        <div className="introBox">Find me</div>
      </div>
    </div>
  );
}
