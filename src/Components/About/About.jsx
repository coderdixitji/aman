import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about'>
      <div className='about-left'>
      <img src={about_img} alt='' className='about_img'/>
      <img src={play_icon} alt='' className='play_icon'/>
      </div>
      <div className='about-right'>
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nurturing Tomorrow  Leaders Today</h2>
       <p>Embark on a Transformative educational journey with our university comprehensive education programs.Our cutting-edge curriculum  is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education.</p>
       <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaning impact in classrooms, schools, and communities. </p>
       <p>Whether you aspire to become a teacher, adminitrator, counselor, or educational leader, our diverserange of program offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.  </p>
      </div>
    </div>
  )
}

export default About
