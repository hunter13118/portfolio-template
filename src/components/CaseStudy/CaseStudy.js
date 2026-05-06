import { Link } from 'react-router-dom';
import { getPlaceholders } from '../../cases/placeholders';
import './CaseStudy.scss'


const CaseStudy = ({slotIndex, caseData}) => {
   const variant = slotIndex % 5;
   const { client, project, images, slug, description } = caseData;
   const fallback = getPlaceholders(variant);
   const img1 = images[0] || fallback.img1;
   const img2 = (images[1] || fallback.img2);

   return(
   <div>
      {variant === 0 && (
         <div className="container">
               <div className="container-grid">
                  <img src={img1} className="square-img img-sm" alt={`${client} - ${project}`} />
                  <img src={img2 || img1} className="square-img img-md" alt={`${client} - ${project}`} />
                  
                  <div className="text-container">
                     <div className="title-holder">
                        <h1>{client}</h1>
                        <h2>{project}</h2>
                     </div>

                     <Link to={`/case/${slug}`} className="button">more+</Link>
                  </div>
               </div>
         </div>
      )}
      
      {variant === 1 && (
         <div className="container">
            <div className="container-grid reverse-order single-img">
               <img src={img1} className="square-img img-full" alt={`${client} - ${project}`} />

               <div className="text-container">
                  <div className="title-holder">
                     <h1>{client}</h1>
                     <h2>{project}</h2>
                  </div>

                  <Link to={`/case/${slug}`} className="button">more+</Link>
               </div>
            </div>
         </div>
      )}

      {variant === 2 && (
         <div className="container">
            <div className="container-grid single-img">
               <img src={img1} className="square-img img-lg" alt={`${client} - ${project}`} />

               <div className="text-container">
                  <div className="title-holder">
                     <h1>{client}</h1>
                     <h2>{project}</h2>
                  </div>

                  <Link to={`/case/${slug}`} className="button">more+</Link>
               </div>
            </div>
         </div>
      )}

      {variant === 3 && (
         <div className="container">
            <div className="container-grid">
               <img src={img1} className="square-img img-md" alt={`${client} - ${project}`} />
               <img src={img2 || img1} className="square-img img-sm" alt={`${client} - ${project}`} />
               
               <div className="text-container">
                  <div className="title-holder">
                     <h1>{client}</h1>
                     <h2>{project}</h2>
                  </div>

                  <Link to={`/case/${slug}`} className="button">more+</Link>
               </div>
            </div>
         </div>
      )}

      {variant === 4 && (
         <div className="container">
            <div className="container-grid reverse-order single-img">
               <img src={img1} className="square-img img-lg-last" alt={`${client} - ${project}`} />

               <div className="text-container">
                  <div className="title-holder">
                     <h1>{client}</h1>
                     <h2>{project}</h2>
                  </div>

                  <Link to={`/case/${slug}`} className="button">more+</Link>
               </div>
            </div>
         </div>
      )}
   </div>

)
}

export default CaseStudy;
