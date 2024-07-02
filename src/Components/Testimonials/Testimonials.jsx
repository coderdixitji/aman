import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import User_1 from "../../assets/user-1.png";
import User_2 from "../../assets/user-2.png";
import User_3 from "../../assets/user-3.png";
import User_4 from "../../assets/user-4.png";
import { useRef } from "react";

function Testimonials() {

   const Slider  = useRef();
   let tx = 0;

 const slideForward = () =>{
    if(tx > -50){
        tx -= 25;
    }
    Slider.current.style.transform = `translateX(${tx}%)`;
 }
 const slideBackward = () =>{
    if(tx < 0){
        tx += 25;
    }
    Slider.current.style.transform = `translateX(${tx}%)`;
 }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="Slider">
        <ul ref={Slider}>
          <li>
            <div className="slide">
              <div className="User-info">
                <img src={User_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
              Choosing to pursue my degree at Educity was one of the best decisions  I ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellece  have truly exceeded  my expactations. 
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="User-info">
                <img src={User_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
              Choosing to pursue my degree at Educity was one of the best decisions  I ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellece  have truly exceeded  my expactations. 
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="User-info">
                <img src={User_3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
              Choosing to pursue my degree at Educity was one of the best decisions  I ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellece  have truly exceeded  my expactations. 
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="User-info">
                <img src={User_4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
              Choosing to pursue my degree at Educity was one of the best decisions  I ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellece  have truly exceeded  my expactations. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
