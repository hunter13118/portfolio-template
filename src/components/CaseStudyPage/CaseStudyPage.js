import { useParams, Link } from 'react-router-dom';
import cases from '../../cases';
import './CaseStudyPage.scss';

const CaseStudyPage = () => {
  const { slug } = useParams();
  const caseIndex = cases.findIndex(c => c.slug === slug);
  const caseData = cases[caseIndex];

  if (!caseData) {
    return (
      <div className="case-page">
        <p>Case study not found.</p>
        <Link to="/">Back to work</Link>
      </div>
    );
  }

  const { client, project, description, longDescription, images } = caseData;

  return (
    <div className="case-page">
      <div className="case-hero">
        <img src={images[0]} alt={`${client} - ${project}`} />
      </div>

      <div className="case-info">
        <h1>{client}</h1>
        <h2>{project}</h2>
        {longDescription && <p className="p1">{longDescription}</p>}
      </div>

      {(images[1] || images[2]) && (
        <div className="case-images">
          {images[1] && <img src={images[1]} alt={`${client} - ${project} detail 1`} />}
          {images[2] && <img src={images[2]} alt={`${client} - ${project} detail 2`} />}
        </div>
      )}

      <Link to="/" className="back-link">← Back to work</Link>
    </div>
  );
};

export default CaseStudyPage;
