import projects from "../data/projects";
import Projectcard from "../components/Projectcard";

const Projects = () => {
    
    return (
        <div className="projects">
            <div className="container px-4 py-5" id="custom-cards">
            <h2 className="pb-2 border-bottom">Projects Ongoing</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            {projects.map((item) => (
                    <Projectcard 
                        key={item.id} 
                        title={item.title} 
                        image={item.image}
                        link={item.link} 
                        about={item.about}
                        place={item.place}
                    />
            ))}
            </div>
            </div>
        </div>
    )
}

export default Projects;