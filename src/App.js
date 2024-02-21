import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/home';
import Nav from './Components/nav-bar/Nav';
import Navbar from './Components/nav-bar/Navbar';
import About from './Screens/about';
import Service from './Screens/service';
import SpecializedServices from './Screens/specialized_services';
import Projects from './Screens/projects';
import MarketFocus from './Screens/market_focus';
import ScrollToTop from './Components/scroll-to/ScrollTo';
import IntegratedSecurity from './Screens/integrated-security';
import Contact from './Screens/contact';
import Procurement from './Screens/procurement';
import Engineering from './Screens/engineering';
import Metering from './Screens/metering';
import Inspection from './Screens/inspection';
import SafetySolutions from './Screens/safety_solutions';
import MarineSupport from './Screens/marine_support';
import ValvesAndActuation from './Screens/valves_and_actuation';
import PipeLiftingSystem from './Screens/pipe_lifting_system';
import SafeIsolation from './Screens/selfe_isolation';
import LeakDetectionSolution from './Screens/leak_detection_solution';
import FireSuppression from './Screens/fire_suppression';
import OilSpill from './Screens/oil_spill';
import TurbinesandRotating from './Screens/turbines_and_rotating';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/specialized_services' element={<SpecializedServices />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/market_focus' element={<MarketFocus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/procurement' element={<Procurement />} />
          <Route path='/engineering' element={<Engineering />} />
          <Route path='/metering_and_instrumentation' element={<Metering />} />
          <Route path='/inspection' element={<Inspection />} />
          <Route path='/safety_solutions' element={<SafetySolutions />} />
          <Route path='/marine_support_solutions' element={<MarineSupport />} />
          <Route path='/valves_and_actuation_services' element={<ValvesAndActuation />} />
          <Route path='/pipe_lifting_system' element={<PipeLiftingSystem />} />
          <Route path='/safe_isolation_of_passing_valves' element={<SafeIsolation />} />
          <Route path='/integrated_security_and_fire_solutions' element={<IntegratedSecurity />} />
          <Route path='/leak_detection_solution' element={<LeakDetectionSolution />} />
          <Route path='/fire_suppression' element={<FireSuppression />} />
          <Route path='/oil_spill_and_waste_water_solutions' element={<OilSpill />} />
          <Route path='/turbines_and_rotating_equipment_solutions' element={<TurbinesandRotating />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
