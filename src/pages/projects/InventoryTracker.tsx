import HeroImage from "../../img/InventoryTracker/InventoryTracker.jpg"

export default function InventoryTracker() {
    return (
        <div className="project-container">

                    <h1>Inventory Tracker</h1>

                    <h2>A simple inventory tracker that allows you to export your list into a CSV file. Data is stored locally. To clear it, double click on the clear list button.</h2>

                    <img className="aligncenter" src={HeroImage} width="700px" />

                    <a target="_blank" className="button" href="https://inventory-tracker-js-123.netlify.app/">Test Project</a>

                    <a target="_blank" className="button" href="https://github.com/TaylorDay11/inventory-tracker">GitHub</a>

        </div>
    )}