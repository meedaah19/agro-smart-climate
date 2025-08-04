import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
// return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/about" element={<About />} />
//         <Route path="/climate-tools" element={<ClimateTools />} />
//         <Route path="/export-hub" element={<ExportHub />} /> 
//         <Route path="/smart-farming" element={<SmartFarming />} /> */}
//       </Routes>
//     </Router>
//   );