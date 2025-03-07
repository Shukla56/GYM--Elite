import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Get the most out of your fitness journey with our top-rated workout sessions.
          Designed by certified trainers, these workouts cater to all fitness levels.
          Experience the perfect blend of cardio, strength training, and flexibility.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our dynamic bootcamps and transform your body and mind. Our expert instructors will push you to your limits and help you achieve your fitness goals.
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Interval Training</h4>
            <p>
              Maximize calorie burn and improve cardiovascular health with our HIIT workouts.
            </p>
          </div>
          <div>
            <h4>Strength Training</h4>
            <p>
              Build muscle and increase strength with our comprehensive strength training programs.
            </p>
          </div>
          <div>
            <h4>Yoga and Flexibility</h4>
            <p>
              Improve your flexibility, reduce stress, and enhance overall well-being with our yoga classes.
            </p>
          </div>
          <div>
            <h4>Functional Fitness</h4>
            <p>
              Develop functional strength and improve your daily movements with our functional fitness classes.
            </p>
          </div>
          <div>
            <h4>Outdoor Bootcamps</h4>
            <p>
              Enjoy the fresh air and challenge yourself with our outdoor bootcamps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;