import './reset.css';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CaseStudy from './components/CaseStudy/CaseStudy';
import CaseStudyPage from './components/CaseStudyPage/CaseStudyPage';
import Nav from './components/Nav/Nav';
import cases from './cases';


function Portfolio() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={
          <div className="caseStudys">
            {cases.map((caseData, index) => (
              <CaseStudy key={index} slotIndex={index} caseData={caseData}/>
            ))}
          </div>
        } />
        <Route path="/case/:slug" element={<CaseStudyPage />} />
        <Route path="/about" element={<div className="about-page"><h1>About</h1><p className="p1">Coming soon.</p></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Portfolio;
