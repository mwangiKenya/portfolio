import { Link } from "react-router-dom";
import Footer from "./Footer";
import styles from "./Home.module.css";

const myBio = {
        name: 'Collins Mwangi',
        rolea: 'Web developer',
        roleb: 'Data analyst',
        place: 'Kisumu Kenya'
    };

function Bio() {
    
    return(
        <>
            <div className="my-bio-div">
                <h1 className="my-name-point"> Hi, I am {myBio.name} </h1>
                <h1> <strong> {myBio.rolea} </strong>  and a
                      <strong> {myBio.roleb} </strong>  </h1>
                <p className="my-description-point">
                    I am an IT student at Maseno University, and I<br/> specialize in 
                    creating clean,  robust  and user friendly <br/> websites using mordern technologies, 
                    and data <br/> analysis  services to support decision making.
                </p>
                
                <Link to = "/Hire">
                    <button className="my-hire-button"> Get in touch </button>
                </Link>
            </div>
        </>
    );
}

function MyPic() {
    return(
        <>
            
           <div className="my-web-pic-div my-name-point">
              <img src="collo-removebg-preview.png" className="my-pic"/>

              <h3> # @ {myBio.rolea} & {myBio.roleb} </h3>
            </div>
            
        </>
    );
}

function CallToAction() {
    return(
        <>
            <div className="my-name-point action-div">
                <h2> Transform your business today. </h2>
                <p>
                    Running any business? Take it to the next level of 
                    digital era and make it known online.
                </p>
                <p>
                    Contact me for website development, that will showcase your 
                    business to potential customers.
                </p>
            </div>
        </>
    );
}

//Create a component to explain what I do for my digital skills services
function MyWork() {
    return(
        <div className={styles.mainDivForWork}>
            <h1> What I do </h1>
            <p>
                I specialize in offering digital services to individuals and businesses to help them
                Transform their operations and reach the target customers.
            </p>
            <div className={styles.skillsHolderForWork}>
                <div className={styles.WorkContentDiv}>
                    <h2> Web design & development </h2>
                    <p>
                        I create websites that brings business ideas to live. In the digital era, 
                        every business needs a website to enable it reach its potential customers,
                        and imcrease the sales.
                    </p>
                    <p>
                        I use mordern teachnologies that ensure high quality and user friendly websites.
                        I use HTML, CSS, JavaScript and React for user interfaces.
                    </p>
                </div>
                <div className={styles.WorkContentDiv}>
                    <h2> Data Analysis </h2>
                    <p>
                        Today, data rules the world. It's the backbone of every successiful business, 
                        I help businesses and individuals analyze and get insight from their data for 
                        decision making. I achieve this using spreadsheet, sql, python, and statistics.
                    </p>
                </div>
                <div className={styles.WorkContentDiv}>
                    <h2> Programming </h2>
                    <p>
                        Computer programms automate every task in a business, making it essential for 
                        every business that target to grow and automate its tasks.
                    </p>
                    <p>
                        With a solid understanding of this concept, I offer services in Object Oriented 
                        Programming with Java, and Structured Programming with C.
                    </p>
                </div>
                <div className={styles.WorkContentDiv}>
                    <h2> Other Digital services </h2>
                    <p>
                        I also offer graphic design services, AI automation in business operations, and 
                        system design. 
                    </p>
                    <p>
                        With the above skills in the age of AI, am ready to take any business project and Transform
                        it to functional ideas.
                    </p>
                </div>
            </div>
        </div>
    );
}

function Home() {
    return(
        <>
            <div className="my-home-holder-div">
            <Bio/>
            <MyPic/>
            </div>
            <hr/>
            <MyWork/>
            <hr/>
            <CallToAction/>
            <Footer/>
        </>
    );
}

export default Home;