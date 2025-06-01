import React from 'react';
// import me from '../../assets/pictures/workingAtComputer.jpg'; // Original image, commented out
// import meNow from '../../assets/pictures/currentme.jpg'; // Original image, commented out
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload'; // Assuming this is generic or will be reviewed

export interface AboutProps {}

const YOUR_PROFESSIONAL_SUMMARY = "With 6+ years of experience in tech, specializing in DevOps for the past 4 years, I've enjoyed collaborating with cross-functional teams on projects like APK-SWAP and Taal Scooters, an IoT-based micro-mobility Project. I'm eager to contribute my skills and knowledge to a dynamic, challenging work environment. I'm also committed to continuous learning and professional development.";

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Ali Qavidel</h3> {/* MODIFIED */}
            <br />
            <div className="text-block">
                <p>
                    {YOUR_PROFESSIONAL_SUMMARY} {/* MODIFIED */}
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. 
                    If you have any questions or comments, feel free to shoot me an email at{" "}
                    <a href="mailto:qaveedel@yahoo.com"> 
                        qaveedel@yahoo.com
                    </a>
                </p>
            </div>
            <ResumeDownload /> {/* Assuming this is generic or we will review its content later */}
            <div className="text-block">
                {/* Ali's detailed "About Me" and "Hobbies" sections have been removed. */}
                {/* You can add your own relevant sections here if desired. */}
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me by shooting me an email
                    at{" "}
                    <a href="mailto:qaveedel@yahoo.com"> 
                        qaveedel@yahoo.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
