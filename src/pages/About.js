import React from 'react';
import Aboutitem from "../components/Aboutitem";
import Aboutme from "../components/Aboutme";
import education from "../data/education";
import experience from "../data/experience";

const About = () => {
    
    return (
        <div className="about">
            <main className="container mx-auto max-width pt-10 pb-20 ">
            <section>
                <Aboutme />
                <Aboutitem data={education} title="Education"/>
                <Aboutitem data={experience} title="Research & Experience"/>
            </section>
            </main>
        </div>
    )
}

export default About;