import React from "react";
import BannerImg from "../../assets/trackingimg.jpg";

const About = () => {
  return (
    <div className="py-14 bg-black duration-300" > 
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center" id='about'>
        <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
              <div>
                  <p className="text-primary"></p>
                  <h1 className="text-2xl sm:text-4xl font-bold  text-primary">Tracking</h1>
                </div> 
               
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide text-gray-300">
                These websites focus on tracking your physical activities such as steps taken, distance covered, and calories burned. They often use sensors in smartphones or wearable devices to monitor movement.
                <br/><br/>
                Workout and Exercise Applications: These websites provide users with various workout routines, exercises, and fitness plans. They can be tailored to different fitness levels and goals, including strength training, cardio, yoga, and more.
              </p>
              
             
            </div>
          </div>
          <div className="relative overflow-hidden" data-aos="fade-up">
  <img
    src={BannerImg}
    alt="Tracking"
    className="sm:scale-110 sm:-translate-x-4 max-h-[300px] rounded-lg shadow-lg object-cover transition-transform duration-300"
  />
</div>

          
        </div>
      </div>
    </div>

    
  );
};

export default About;
