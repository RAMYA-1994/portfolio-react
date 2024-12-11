import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg1 from "../../assets/2016_08_02_9267_1470132061._large.jpg";
import bannerImg2 from "../../assets/gettyimages-1460713621-612x612.jpg";
import bannerImg3 from "../../assets/b8ebfa53c9381c5943148ebbbb3a8cf1.jpg";



const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
    
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
  
      <div className="py-12 px-8 flex flex-wrap gap-5">
     
        <ProjectCard
         image={bannerImg1} 
           title=" Airbnb clone"
          main="This Airbnb Clone is a full-stack web application that replicates the core functionality of Airbnb, enabling users to explore rental properties, book accommodations, and manage reservations. Built with React for the front end, Node.js for the server,
           and MongoDB for the database, this project showcases a robust system for managing listings, users, and bookings"
           vlink="https://airbnbclone-gamma.vercel.app/"
           repolink="https://github.com/RAMYA-1994/airbnbclone"
        />
        
        <ProjectCard
        image={bannerImg2} 
          title="Landing Page"
          main="Skilled in creating responsive, high-performance landing pages using HTML, CSS, JavaScript, and frameworks like React and Next.js. 
          Focused on delivering engaging user experiences with SEO optimization, analytics integration, and fast load times."
           vlink="https://landingpage-sable-six.vercel.app/"
           repolink="https://github.com/RAMYA-1994/landingpage"
        />
         <ProjectCard className="h-2 "
          image={bannerImg3} Styles={{ height: "1px", objectFit: "cover" }} // Custom style for bannerImg3

          title="Price Card"
          main="Dynamic Price Card component using conditional rendering to display various pricing plans, discounts, 
          and features, tailored to user needs with responsive buttons and optimized user experience."
           vlink="https://price-card-task-six.vercel.app//"
           repolink="https://github.com/RAMYA-1994/price-card-task"
        />
      </div>
    </div>
  );
};

export default Projects;
