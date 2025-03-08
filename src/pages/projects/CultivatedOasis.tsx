import ScrollOrNext from "../../components/ScrollOrNext"
import HeroImage from "../../img/CultivatedOasis/CultivatedOasisHeroImage.png"
import Quiz from "../../img/CultivatedOasis/Quiz.png"
import Results from "../../img/CultivatedOasis/Results.png"
import Search from "../../img/CultivatedOasis/Search.png"
import DetailedPlant from "../../img/CultivatedOasis/DetailedPlant.png"
import Persona1 from "../../img/CultivatedOasis/CultivatedPersona1.jpg"
import Persona2 from "../../img/CultivatedOasis/CultivatedPersona2.jpg"
import UserJourney from "../../img/CultivatedOasis/CultivatedUserJourney.png"
import Crazy8s from "../../img/CultivatedOasis/image_67127041.jpg"
import Sitemap from "../../img/CultivatedOasis/PlantWebsiteSitemap.png"
import Sketching from "../../img/CultivatedOasis/image_67142145.jpg"
import DesktopWireframes from "../../img/CultivatedOasis/CultivatedWireframesDesktop.png"
import UsabilityTesting from "../../img/CultivatedOasis/UsabilityTesting.png"
import Mockups from "../../img/CultivatedOasis/Mockups.png"
import MobileMockups from "../../img/CultivatedOasis/MobileMockups.png"

export default function CultivatedOasis() {
    return (
        <div className="project-container">

            <h1>Cultivated Oasis</h1>

            <h2>A responsive website for ordering plants.</h2>

            <img className="aligncenter" src={HeroImage} width="700px" />

            <p><b>Challenge:</b> When people don’t have a lot of experience with plants, going to purchase one can be on overwhelming experience because there are so many options and some are more difficult to take of than others.</p> 

            <p><b>Solution:</b> Cultivated Oasis helps fix that problem by providing a quiz people can take that matches them to plants that would be ideal for their space. </p>   

            <div className="highlights">

                <img className="alignleft" src={Quiz} width="350px" />

                 <p className="cultivatedpadding">Take the quiz to receive suggestions for the ideal plant for you and your space.</p>

             </div>

             <div className="highlights">

                <p className="cultivatedpadding">The results page walks you through how to use the triangle, square, and circle icons to help you find the perfect plant.</p>

                <img className="alignright" src={Results} width="350px" />

            </div>

            <div className="highlights">

                <img className="alignleft" src={Search} width="350px" />

                <p className="cultivatedpadding">You can look at those icons on each image to quickly know whether the plant is a good fit.</p>

            </div>

            <div className="highlights">

                <p className="cultivatedpadding">The icons are also located on each plant page so you can have a more detailed explanation.</p>

                <img className="alignright" src={DetailedPlant} width="350px" />

             </div>

            <h2>Personas</h2> 

            <div className="personas">
                <img className="alignnone" src={Persona1} width="480px" /> 
                <img className="alignnone" src={Persona2} width="480px" />
            </div>

            <h2>User Journey Map</h2> 

            <img className="aligncenter" src={UserJourney} width="900px" />

            <h2>Pain Points</h2> 

            <h3>1) Feeling Overwhelmed</h3>
            <p>I found that people who don’t know a lot about plants often feel overwhelmed with all of their choices.</p>

            <h3>2) Doesn’t want the plant to die</h3>
            <p>Most people buying plants want to make sure it will actually be able to survive in their space.</p>

            <p>While conducting user research, I found that most people who don’t know a lot about plants can feel overwhelmed with all of their choices. Some feel discouraged because they don’t want to pick a plant that’s difficult to take care of and ends up dying soon after they purchase it. They also are unsure of the best plants that will fit in their space.</p>

            <h2>Crazy 8s Ideating</h2> 

            <img className="aligncenter" src={Crazy8s} width="900px" />

            <h2>Sitemap</h2> 

            <img className="aligncenter" src={Sitemap} width="900px" />

            <h2>Sketching</h2> 

            <img className="aligncenter" src={Sketching} width="900px" />

            <h2>Wireframes</h2> 

            <img className="aligncenter" src={DesktopWireframes} width="900px" />

            <h2>Usability Testing</h2> 

            <p>User testing went fairly smoothley for my low fidelity prototype, most users were able to get through the flow without any issues. The one area people started to get stuck at was after they added the plant to the cart, it took them a second to figure out the next step was going to the cart to check out so I added a notification to make it more obvious.</p>

            <img className="aligncenter" src={UsabilityTesting} width="900px" />

            <h2>Mockups</h2> 

            <img className="aligncenter" src={Mockups} width="900px" />

            <img className="aligncenter" src={MobileMockups} width="900px" />

            <h2>High Fidelity Prototype</h2> 

            <h3>Desktop</h3>

             <div style={{position: "relative", paddingBottom: "56.25%", height: "0"}}>
                <iframe src="https://www.loom.com/embed/f7e116c0028e45babc337165adcbe753" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe>
            </div>

            <a target="_blank" className="button" href="https://xd.adobe.com/view/98428925-fd08-48d9-ab92-8f6f67f9f592-cd11/?fullscreen">Test Prototype</a>

            <h3>Mobile</h3>

            <div style={{position: "relative", paddingBottom: "56.25%", height: "0"}}>
                <iframe src="https://www.loom.com/embed/9e25309f557b4fd6b36801a52bc88268" style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe>
            </div>

            <a target="_blank" className="button" href="https://xd.adobe.com/view/d0f6aae9-00a0-4a37-995e-7657d1e0d574-85a5/?fullscreen">Test Prototype</a>

            <h2>Sources</h2> 

                <p>Icons - <a className="source-link" target="_blank" href="https://thenounproject.com/">Noun Project</a></p>

                <p>Images - <a className="source-link" target="_blank" href="https://unsplash.com/">Unsplash</a></p>

                <ScrollOrNext />

        </div>
    )
}