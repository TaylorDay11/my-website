import ScrollOrNext from "../../components/ScrollOrNext.tsx"
import HeroImage from "../../img/MonarcaCantina/HeroImage.png"
import CreateGroup from "../../img/MonarcaCantina/CreateGroup.png"
import GroupOrder from "../../img/MonarcaCantina/GroupOrder.png"
import Schedule from "../../img/MonarcaCantina/Schedule.png"
import Person1 from "../../img/MonarcaCantina/MonarcaPerson1.png"
import Person2 from "../../img/MonarcaCantina/MonarcaPerson2.png"
import UserJourneyMap from "../../img/MonarcaCantina/MonarcaUserJourneyMap2.png"
import ChipotleLogo from "../../img/MonarcaCantina/chipotlelogolong.png"
import CoronasLogo from "../../img/MonarcaCantina/coronaslogo.png"
import QDobaLogo from "../../img/MonarcaCantina/qdobalogo.png"
import HaciendaLogo from "../../img/MonarcaCantina/haciendalogo.png"
import UserFlow from "../../img/MonarcaCantina/MonarcaUserflow.png"
import PaperWireframesHome from "../../img/MonarcaCantina/PaperWireframesHome.jpg"
import PaperWireframesGroup from "../../img/MonarcaCantina/PaperWireframesGroup.jpg"
import PaperWireframesOrdering from "../../img/MonarcaCantina/PaperWireframesOrdering.jpg"
import PaperWireframesCart from "../../img/MonarcaCantina/PaperWireframesCart.jpg"
import PaperWireframesTracking from "../../img/MonarcaCantina/PaperWireframesTracking.jpg"
import Wireframes from "../../img/MonarcaCantina/MonarcaWireframes.png"
import AffinityDiagram from "../../img/MonarcaCantina/MonarcaAffinityDiagram.png"
import UsabilityTesting from "../../img/MonarcaCantina/UsabilityTesting.png"
import Accessibility from "../../img/MonarcaCantina/AccessibilityConsiderations.png"
import Mockups from "../../img/MonarcaCantina/MonarcaMockups.png"
import StickerSheet from "../../img/MonarcaCantina/MonarcaStickerSheet.png"

export default function MonarcaCantina() {
    return (
        <div className="project-container">

                    <h1>Monarca Cantina</h1>

                    <h2>An app for ordering Mexican food.</h2>

                    <img className="aligncenter" src={HeroImage} width="700px" />

                    <p><b>Challenge:</b> Between collecting everyone’s order, adding each item to the cart, and double checking to make sure everything is correct, placing a group food order can take a lot of time which can be frustrating to people that are busy.</p> 

                    <p><b>Solution:</b> The Monarca Cantina app allows everyone in the group order to add their own food to the cart, which saves time and reduces the chance of someone getting the wrong order. Users can also schedule the order ahead of time to coordinate the pick up time with their busy schedule.</p> 

                    <div className="highlights">

                        <img className="alignleft" src={CreateGroup} width="250px" />

                        <p>You can put together your group by adding everyone's phone numbers or easily choose from a group you've used in the past. Everyone in the group will be texted a link they can follow to add items from their own device.</p>

                    </div>

                    <div className="highlights">

                        <p>After you've added your food to the order you can keep track of which people in your group have completed their orders and who you're still waiting for.</p>

                        <img className="alignright" src={GroupOrder} width="250px" />

                    </div>

                    <div className="highlights">

                        <img className="alignleft" src={Schedule} width="250px" />

                        <p>When everyone has finished adding their food to the order you can choose which day and time you want to pick it up.</p>

                    </div>

                    <h2>Personas</h2> 

                    <div className="personas">
                        <img className="alignnone" src={Person1} width="480px" /> 
                        <img className="alignnone" src={Person2} width="480px" />
                    </div>

                    <h2>User Journey Map</h2> 

                    <img className="aligncenter" src={UserJourneyMap} width="900px" />

                    <p>After performing user research it became clear that collecting everyone’s order and relaying that info to the restaurant is the most time consuming part of placing a group order. I also realized that it’s important to allow users to be able to choose what time they want to come pick up their food, that way they aren't always forced to place the order right before they go pick it up.</p>

                    <h2>Competitive Audit</h2>

                    <div className="competitiveaudit">
                        <img className="alignnone" src={ChipotleLogo} height="100px" /> 
                        <img className="alignnone" id="coronaslogo" src={CoronasLogo} height="100px" />
                        <br />
                        <img className="alignnone" src={QDobaLogo} height="70px" /> 
                        <img className="alignnone" src={HaciendaLogo} height="70px" />
                    </div>

                    <p>I performed a competitive audit on Chipotle, QDoba, Corona’s Mexican Grill, and Hacienda to figure out what they were doing well and what could be improved. Not surprisingly, Chipotle had the best user experience by far. I really appreciated all of the high quality images of food and how the information was laid out, it made me want to place an order.</p>

                    <h2>User Flow</h2>

                    <img className="aligncenter" src={UserFlow} width="900px" />

                    <h2>Sketching</h2>

                    <div className="sketches">
                        <img className="alignnone" src={PaperWireframesHome} height="270px" /> 
                        <img className="alignnone" src={PaperWireframesGroup} height="270px" /> 
                        <img className="alignnone" src={PaperWireframesOrdering} height="270px" /> 
                        <img className="alignnone" src={PaperWireframesCart} height="270px" /> 
                        <img className="alignnone" src={PaperWireframesTracking} height="270px" />
                    </div>

                    <h2>Wireframes</h2>

                    <img className="aligncenter" src={Wireframes} width="900px" />

                    <h2>Usability Testing</h2>

                    <img className="aligncenter" src={AffinityDiagram} width="900px" />

                    <p><br />
                    5 participants<br />
                    23 to 65 years old<br />
                    USA, unmoderated remote</p>

                    <p>After performing user testing, I realized I didn’t add enough labels and my users were getting confused about what page they were on. I went back and added more labels throughout the app to make it more obvious what step of the process you were on. Below, you can see I added a label to the Group Orders page that way the users know they’re looking at the orders for everyone in their group.</p>

                    <img className="aligncenter" src={UsabilityTesting} width="700px" />

                    <h2>Accessibility Considerations</h2>

                    <img className="aligncenter" src={Accessibility} width="700px" />

                    <p>I used the WebAim Contrast Checker tool to ensure all of my text was legible, I found that some of my buttons didn’t have enough contrast and could be hard for some people to read. In the image above, you can see the orange and green buttons made the white text a little difficult to read so I had to make some adjustments.</p>

                    <p>I also included options for accessibility and language in the settings menu.</p>

                    <h2>Mockups</h2>

                    <img className="aligncenter" src={Mockups} width="900px" />

                    <h2>Sticker Sheet</h2>

                    <img className="aligncenter" src={StickerSheet} width="900px" />

                    <h2>HiFi Prototype</h2>

                    <p>
                        <a target="_blank" className="button" href="https://www.loom.com/share/fd556a902f814b15a8fb8d31766f15c7?sid=e2fb148b-7902-4a94-bb93-dc21da262775">Watch Walkthrough</a>
                        <a target="_blank" className="button" href="https://www.figma.com/proto/U7EarXZ5lYCbSjcKRYaVhJ/Mexican-Food-App?node-id=322%3A706&scaling=scale-down&starting-point-node-id=322%3A782">Test Prototype</a>
                    </p>

                    <h2>Sources</h2>

                    <p>Icons - <a className="source-link" target="_blank" href="https://fontawesome.com/v5/icons/font-awesome-logo-full">Font Awesome</a></p>

                    <p>Images - <a className="source-link" target="_blank" href="https://unsplash.com/">Unsplash</a></p>

                    <p>Logo - <a className="source-link" target="_blank" href="https://monarcacantina.com/">Monarca Cantina</a></p>

                    <ScrollOrNext />
            </div>
    )
}