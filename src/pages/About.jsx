import { useEffect } from 'react';
import Section from '../components/Section';
import './Home.css'
const About = () => {

    useEffect(() => {
        document.title = 'About | ISPSC Tagudin';
    
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
              <div className='about_dev'>
              <h3>About the Developer</h3>
                <img width='200px' src='https://avatars.githubusercontent.com/u/16523328?v=4'></img>
                <h4>Cyanne Justin Vega</h4>
              <p>I am currently an IT student in the field of web development. I consider myself to be at an intermediate level of knowledge and expertise in this field, I envision myself as an excellent web developer. I am actively participating and studying to further improve my skills and advance my career in this field. I am passionate and eager to learn, an IT student with a background in programming languages and technologies. Possessing extensive knowledge and experience gained through real-world projects and continuous learning. Consistently striving to improve skills and tackle new challenges in the field.</p>
              
              </div>
            
            </div>

        </div>
      </div>
    </div>

</>
  )
}

export default About;
