import React from "react";

const About = () => {
  return (
    <div className="text-3xl text-center">
      <h2>We help companies <br />
to find talents</h2>
<div >
<div className="card card-compact w-96 bg-base-100 shadow-xl w-full">
  <figure><img className="w-full"  src="/src/assets/job.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    
    <p className="text-3xl">We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!</p>
    
  </div>
</div>
</div>
    </div>
  );
};

export default About;
