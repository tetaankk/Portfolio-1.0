import "./intro.scss";
import DevIcon from "devicon-react-svg";
import GetAppIcon from "@material-ui/icons/GetApp";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="introBoxContainer">
        <div className="introBox">
          <div className="frontBox">About</div>
          <div className="bottomBox">
            A developer-turned Excel enthusiast. The joy of building things and
            solving problems creatively drove me to pursue new opportunities.
          </div>
          <div className="bg-blur box-1"></div>
        </div>
        <div className="introBox">
          <div className="frontBox">Background</div>
          <div className="bottomBox">
            B.Sc. in Information System Science, 2018 /// M.Sc. in Corporate
            Environmental Management, 2021
          </div>
          <div className="bg-blur box-2"></div>
        </div>
        <div className="introBox">
          <div className="frontBox">Resume</div>
          <div className="bottomBox">
            <a href="../../CV.pdf" target="_blank">
              <GetAppIcon className="downloadIcon" />
            </a>
          </div>
          <div className="bg-blur box-3"></div>
        </div>
        <div className="introBox">
          <div className="frontBox">Skills</div>
          <div className="bottomBox">
            <div className="skillContainer">
              <DevIcon icon="react" className="skillBox" />
              <DevIcon icon="javascript" className="skillBox" />
              <DevIcon icon="nodejs" className="skillBox" />
              <DevIcon icon="mysql" className="skillBox" />
              <DevIcon icon="mongodb" className="skillBox" />
              <DevIcon icon="sass" className="skillBox" />
              <DevIcon icon="html5" className="skillBox" />
              <DevIcon icon="git" className="skillBox" data-hover="Git" />
            </div>
          </div>
          <div className="bg-blur box-4"></div>
        </div>
        <div className="introBox">
          <div className="frontBox">Looking for</div>
          <div className="bottomBox">
            A web or front-end developer position, be it junior or associate. I
            am also interested in other opportunities, such as data engineering.
          </div>
          <div className="bg-blur box-5"></div>
        </div>
        <div className="introBox">
          <div className="frontBox">Hoping for</div>
          <div className="bottomBox">
            <p>
              A position in which I could utilize my skills and foster my
              enthusiasm. I am by no means complete, but even more so, I'm eager
              and motivated to learn and grow!
            </p>
          </div>
          <div className="bg-blur box-6"></div>
        </div>
      </div>
    </div>
  );
}
