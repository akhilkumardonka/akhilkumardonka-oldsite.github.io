import React from 'react';
import skills from "../data/skills";
import Skillcard from "../components/Skillcard";
import Workcolab from "../components/Workcolab";

const Skills = () => {
    
    return (
        <div className="skills">
            <main className="container mx-auto max-width pt-10 pb-20 my-5">
            <section>
                <h1 className="font-weight-bold">
                My Tech Arsenal
                </h1>
                <p className="text-content">
                Technologies I've been working with recently
                </p>
            </section>
            <section className="my-5">
                <div className="row">
                {skills.map((item) => (
                    <Skillcard key={item.id} name={item.name} img={item.img}/>
                ))}
                </div>
            </section>
            <section>
                <h1 className="font-weight-bold">
                Love to Collaborate
                </h1>
                <p className="text-content">
                Lets Work Together
                </p>
                <div className="row align-items-md-stretch g-2">
                    <Workcolab title="API Design & Development" content="Design of RESTful APIs for structured information management"/>
                    <Workcolab title="Audio & Speech Research" content="Open for research & internship opportunities at academic & industry labs"/>
                </div>
            </section>
            </main>
        </div>
    )
}

export default Skills;