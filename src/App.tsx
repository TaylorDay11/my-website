import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.tsx"
import './index.css'
import Home from "./pages/Home.tsx"
import AboutMe from "./pages/AboutMe.tsx"
import ToolBox from "./pages/ToolBox.tsx"
import MyWork from "./pages/MyWork.tsx"
import MonarcaCantina from "./pages/projects/MonarcaCantina.tsx"
import CultivatedOasis from "./pages/projects/CultivatedOasis.tsx"
import VolunteerFinders from "./pages/projects/VolunteerFinders.tsx"
import NationalParkTravelJournal from "./pages/projects/NationalParkTravelJournal.tsx"
import InventoryTracker from "./pages/projects/InventoryTracker.tsx"
import MovieHangman from "./pages/projects/MovieHangman.tsx"
import TriviaNightTraining from "./pages/projects/TriviaNightTraining.tsx"
import NotFound from "./pages/NotFound.tsx"

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="tool-box" element={<ToolBox />} />
        <Route path="my-work" element={<MyWork />} />
        <Route path="monarca-cantina" element={<MonarcaCantina />} />
        <Route path="cultivated-oasis" element={<CultivatedOasis />} />
        <Route path="volunteer-finders" element={<VolunteerFinders />} />
        <Route path="inventory-tracker" element={<InventoryTracker />} />
        <Route path="travel-journal" element={<NationalParkTravelJournal />} />
        <Route path="movie-hangman" element={<MovieHangman />} />
        <Route path="trivia-training" element={<TriviaNightTraining />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}
