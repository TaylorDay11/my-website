import ScrollOrNext from "../../components/ScrollOrNext.tsx"
import HeroImage from "../../img/VolunteerFinders/VolunteerFindersHeroImage.png"
import Onboarding from "../../img/VolunteerFinders/Onboarding.png"
import Home from "../../img/VolunteerFinders/Home.png"
import Results from "../../img/VolunteerFinders/Results.png"
import Liked from "../../img/VolunteerFinders/Liked.png"
import Email from "../../img/VolunteerFinders/Email.png"
import Persona1 from "../../img/VolunteerFinders/VolunteerAppPersona1.jpg"
import Persona2 from "../../img/VolunteerFinders/VolunteerAppPersona2.jpg"
import Crazy8s from "../../img/VolunteerFinders/image_67165441.jpg"
import FlowChart from "../../img/VolunteerFinders/VolunteerAppFlowChart.png"
import Sketches1 from "../../img/VolunteerFinders/image_67169281.jpg"
import Sketches2 from "../../img/VolunteerFinders/image_67142913.jpg"
import Sketches3 from "../../img/VolunteerFinders/image_67181313.jpg"
import Wireframes from "../../img/VolunteerFinders/Wireframes.png"
import AffinityDiagram from "../../img/VolunteerFinders/VolunteerAppAffinityDiagram.png"
import UserTesting from "../../img/VolunteerFinders/image_67155457.jpg"
import UsabilityTesting from "../../img/VolunteerFinders/UsabilityTesting.png"
import Mockups from "../../img/VolunteerFinders/Mockups.png"
import Sitemap from "../../img/VolunteerFinders/Sitemap.png"
import WebsiteWireframes from "../../img/VolunteerFinders/WebsiteWireframes.png"
import MobileMockups from "../../img/VolunteerFinders/MobileMockups.png"
import TabletMockups from "../../img/VolunteerFinders/TabletMockups.png"
import DesktopMockups from "../../img/VolunteerFinders/DesktopMockups.png"
import StickerSheet from "../../img/VolunteerFinders/StickerSheet.png"

export default function VolunteerFinders() {
    return (
                <div className="project-container">

                    <h1>Volunteer Finders</h1>

                    <h2>A responsive website and mobile app for finding volunteer opportunities.</h2>

                    <img className="aligncenter" src={HeroImage} width="700px" />

                    <p><b>Challenge:</b> It can be difficult to find volunteer opportunities that are in your area, match your interests, and work with your schedule.</p> 

                    <p><b>Solution:</b> Volunteer Finders helps fix that problem by asking you a series of questions and matching you with available volunteer opportunities in your area. </p>  

                    <div className="highlights">

                        <img className="alignleft" src={Onboarding} width="250px" />

                        <p>When you create a new account you're asked some questions to help you find volunteer opportunities in your area that would be a good match.</p>

                    </div>

                    <div className="highlights">

                        <p>If you ever want to change your answers you can go to the home screen and click edit.</p>

                        <img className="alignright" src={Home} width="250px" />

                    </div>

                    <div className="highlights">

                        <img className="alignleft" src={Results} width="250px" />

                        <p>Browse a list of volunteer opportunities that have been chosen as a good match.</p>

                    </div>

                    <div className="highlights">

                        <p>When you find one you like you can save it.</p>

                        <img className="alignright" src={Liked} width="250px" />

                    </div>

                    <div className="highlights">

                        <img className="alignleft" src={Email} width="250px" />

                        <p>You can also send the initial email contacting the organization directly from the app.</p>

                    </div>

                    <h2>Personas</h2> 

                    <div className="personas">
                        <img className="alignnone" src={Persona1} width="480px" /> 
                        <img className="alignnone" src={Persona2} width="480px" />
                    </div>

                   <p>While performing user research I learned about the unique needs that each of my users might have when they’re looking for a volunteer opportunity. For example, if an older person is looking for a volunteer opportunity they might be concerned about how far it is and how much physical activity they’ll need to do, where as a younger adult with a busier schedule might be more concerned about how much time the opportunity takes.</p>

                    <h2>Crazy 8s Ideating</h2> 

                    <img className="aligncenter" src={Crazy8s} width="700px" />

                    <h2>Flow Chart</h2> 

                    <img className="aligncenter" src={FlowChart} width="900px" />

                    <h2>Sketches</h2> 

                    <img className="aligncenter" src={Sketches1} width="700px" />

                    <img className="aligncenter" src={Sketches2} width="700px" />

                    <img className="aligncenter" src={Sketches3} width="700px" />

                    <h2>Wireframes</h2> 

                    <img className="aligncenter" src={Wireframes} width="900px" />

                    <h2>Usability Testing</h2> 

                    <img className="aligncenter" src={AffinityDiagram} width="900px" />

                    <p><br />
                    5 participants<br />
                    23 to 65 years old<br />
                    USA, unmoderated remote</p>

                    <p>I got pretty good feedback from user testing, but it was clear I needed to make some signifcant design changes before moving on in the process. A lot of my testers were getting stuck after they got through the onboarding process, it wasn't really clear how to navigate the app once they got to the matching page. I decided to add a home screen to my design to help with user flow, initially I didn't think it was going to be necessary but I ended up combining my original concept for a profile page with buttons to assist with navigation to create a home screen.</p>

                    <img className="aligncenter" src={UserTesting} width="700px" />

                    <img className="aligncenter" src={UsabilityTesting} width="700px" />

                    <h2>Mockups</h2> 

                    <img className="aligncenter" src={Mockups} width="900px" />

                    <h2>High Fidelity Prototype</h2> 

                    <p>
                        <a target="_blank" className="button" href="https://www.loom.com/share/9202912902af48c4a8f094d59ce4ef47">Watch Walkthrough</a>
                        <a target="_blank" className="button" href="https://www.figma.com/proto/R8uqEjGkhYVWFYoJIZn7nl/Volunteer-App?node-id=149%3A812&scaling=scale-down&starting-point-node-id=152%3A1592">Test Prototype</a>
                    </p>

                    <h2>Sitemap</h2> 

                    <img className="aligncenter" src={Sitemap} style={{backgroundColor: "#fff", padding: "10px"}} width="900px" />

                    <h2>Website Wireframes</h2> 

                    <img className="aligncenter" src={WebsiteWireframes} width="900px" />

                    <h2>Website Mockups</h2> 

                    <h3>Mobile</h3>

                    <img className="aligncenter" src={MobileMockups} width="900px" />

                    <h3>Tablet</h3>

                    <img className="aligncenter" src={TabletMockups} width="900px" />

                    <h3>Desktop</h3>

                    <img className="aligncenter" src={DesktopMockups} width="900px" />

                    <h2>Sticker Sheet</h2> 

                    <img className="aligncenter" style={{backgroundColor: "#fff", padding: "10px"}} src={StickerSheet} width="900px" />
                    
                    <h2>Sources</h2> 

                    <p>Icons - <a target="_blank" className="source-link" href="https://thenounproject.com/">Noun Project</a></p>

                    <p>Person Icon - <a target="_blank" className="source-link" href="https://blush.design/">Blush</a></p>   

                    <p>Images - <a target="_blank" className="source-link" href="https://unsplash.com/">Unsplash</a></p>

                    <ScrollOrNext />

                </div> 
    )
}