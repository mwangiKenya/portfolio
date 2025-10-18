import Footer from "./Footer";

function Skills() {
    return(
        <>
            <div className="skill-show-div">
                <h2>My tech skills and certifications. </h2>
                <div className="my-skills-divs">
                     <h3> Web development skills </h3>
                     <p> <strong> HTML </strong> for web structure, </p>    
                     <p> <strong> CSS  </strong> for web styling, </p>
                     <p> <strong> JavaScript </strong> for functionality, </p>
                     <p> <strong> React JS </strong> for creating user interfaces, </p>
                     <p> <strong> NodeJs </strong> for backend development, </p>
                     <p> <strong> mySQL </strong> for data storage. </p>
                </div> 

                <div className="my-skills-divs">
                    <h3> Data analysis skills </h3>
                    <p> <strong> SpreadSheet </strong></p>
                    <p> <strong> SQL </strong></p>
                    <p> <strong> Python </strong></p>
                    <p> <strong> Statistics </strong></p>
                </div>

                <div className="my-skills-divs">
                    <h3> Programming skills </h3>
                    <p> <strong> Object Oriented Programming; </strong> Java </p>
                    <p> <strong> Structured Programming; </strong> C </p>
                </div>

                <div className="my-skills-divs">
                    <h3> Other skills; </h3>
                    <p> System analysis and design, </p>
                    <p> Graphic design </p>
                    <p> Prompt engineering </p>
                </div>

                <p>
                    With the above skills at my arsenal, am ready to take any project and bring any Idea to life.
                </p>
            </div>

            <Footer/>
        </>
    );
}

export default Skills;