import { SiTypescript, SiJavascript, SiCss3, SiHtml5, SiReact, SiNodedotjs, SiJquery, SiPhp, SiAdobexd, SiSketch, SiGoogleanalytics, SiGooglesearchconsole, SiSemrush, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects } from "react-icons/si"
import { FaWordpress, FaWebflow, FaFigma } from "react-icons/fa6"
import { MdStorefront } from "react-icons/md"
import { GiFrogFoot } from "react-icons/gi"

export default function ToolBox() {
    return (
        <div className="tool-box-container">

            <h1>Tool Box</h1>

            <h2>Web Development</h2>

            <div className="tool-list">

                <p className="tool"><SiHtml5 />HTML</p>

                <p className="tool"><SiCss3 />CSS</p>

                <p className="tool"><SiJavascript />JavaScript</p>

                <p className="tool"><SiTypescript />TypeScript</p>

                <p className="tool"><SiReact />React.JS</p>

                <p className="tool"><SiNodedotjs />Node.JS</p>

                <p className="tool"><SiJquery />jQuery</p>

                <p className="tool"><SiPhp />PHP</p>

                <p className="tool"><FaWordpress />WordPress</p>

                <p className="tool"><FaWebflow />Webflow</p>

            </div>

            <h2>UX/UI Product Design</h2>

            <div className="tool-list">

                <p className="tool"><FaFigma />Figma</p>

                <p className="tool"><SiAdobexd />Adobe XD</p>

                <p className="tool"><SiSketch />Sketch</p>

            </div>

            <h2>SEO Optimization</h2>

            <div className="tool-list">

                <p className="tool"><SiGoogleanalytics />Google Analytics</p>

                <p className="tool"><SiGooglesearchconsole />Google Search Console</p>

                <p className="tool"><MdStorefront />Google Business Profile</p>

                <p className="tool"><GiFrogFoot />Screaming Frogs</p>

                <p className="tool"><SiSemrush />SEMrush</p>

            </div>

            <h2>Graphic Design</h2>

            <div className="tool-list">

                <p className="tool"><SiAdobephotoshop />Adobe Photoshop</p>

                <p className="tool"><SiAdobeillustrator />Adobe Illustrator</p>

                <p className="tool"><SiAdobeindesign />Adobe InDesign</p>

            </div>

            <h2>Video Editing</h2>

            <div className="tool-list">

                <p className="tool"><SiAdobepremierepro />Adobe Premiere</p>

                <p className="tool"><SiAdobeaftereffects />Adobe After Effects</p>

            </div>
        </div>
    )
}