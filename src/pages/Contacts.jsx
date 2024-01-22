import { useEffect } from 'react';
import Section from '../components/Section';

const Contacts = () => {

    useEffect(() => {
        document.title = 'Contact | ISPSC Tagudin';
    
        return () => {
          document.title = 'Home | ISPSC Tagudin';
        };
      }, []); 

  return (
    <>
    <div className="container">
     <div className="row">
       <div className="col-3">
           <Section></Section>
       </div>

       <div className="col-9">
           <div className=' mission_vision_card'>
             <div className='s'>
                <div className='card'>
                <h3>General Contact Information</h3>
      <ul>
        <li>Email: <a href="mailto:ispsctagudin@yahoo.com">ispsctagudin@yahoo.com</a></li>
        <li>Phone: 077-674-1474</li>
        <li>Address: Quirino, Tagudin, Ilocos Sur</li>
      </ul>

                </div>
             </div>
           
           </div>

       </div>
     </div>
   </div>

</>
  );
};

export default Contacts;