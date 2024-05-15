import Faq from "../components/Faq";
import slide1 from "../assets/slide1.png";

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold text-primary mb-4">
          About ClimaSync
        </h1>
        <p className="text-lg">
          ClimaSync is a cutting-edge weather web application that provides
          real-time weather updates. Built with the latest web technologies,
          including React, Tailwind CSS, and DaisyUI, ClimaSync offers an
          intuitive and responsive design for an exceptional user experience.
        </p>
      </div>

      <div className="my-10">
        <h2 className="text-3xl font-bold text-primary mb-4">Features</h2>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={slide1} className="w-full" alt="Slide 1" />
            <div className="absolute text-center">
              <h3 className="text-2xl text-white">Real-Time Weather Data</h3>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://via.placeholder.com/800x300"
              className="w-full"
              alt="Slide 2"
            />
            <div className="absolute text-center">
              <h3 className="text-2xl text-white">Interactive Maps</h3>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://via.placeholder.com/800x300"
              className="w-full"
              alt="Slide 3"
            />
            <div className="absolute text-center">
              <h3 className="text-2xl text-white">Forecast Planning</h3>
            </div>
          </div>
        </div>
      </div>

      <Faq />

      <div className="my-10">
        <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Get in Touch!</h2>
            <p>
              Have questions or feedback? Reach out to us via our contact form
              or follow us on social media.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact Form</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
