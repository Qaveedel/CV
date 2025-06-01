import React from 'react';
// VideoAsset imports commented out as we don't have videos for Ali's projects yet
// @ts-ignore
// import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
// import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
// import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
// import VideoAsset from '../../general/VideoAsset'; // Commented out

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1> {/* MODIFIED to match Projects.tsx title */}
            <h3>I have contributed to</h3>
            <br />
            <p>
                Below are some of my key projects showcasing my experience in DevOps and software engineering.
            </p>
            <br />
            <ResumeDownload />
            <br />

            {/* Project 1: MyTaal */}
            <div className="text-block">
                <h2>MyTaal</h2>
                <br />
                <p>
                    Contributed to a micro-mobility platform enabling users to access city-wide electric scooters via a mobile app.
                </p>
                <br />
                <p>
                    <em>Role & Technologies: Provided DevOps expertise focusing on Docker, Consul, CI/CD, and virtualization for a backend built with Golang and PostgreSQL.</em>
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://mytaal.ir/"
                        >
                            <p>
                                <b>Product Page</b>
                            </p>
                        </a>
                    </li>
                    {/* Add GitHub link here if available */}
                </ul>
            </div>

            {/* Project 2: DataMaat */}
            <div className="text-block">
                <h2>DataMaat</h2>
                <br />
                <p>
                    Developed a survey system for IRIB (Islamic Republic of Iran Broadcasting) to gather feedback on television programming.
                </p>
                <br />
                <p>
                    <em>Role & Technologies: Led DevOps efforts, implementing CI/CD, containerization (Docker), and infrastructure automation for a system built with Golang, React, and PostgreSQL.</em>
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://datamaat.ir/"
                        >
                            <p>
                                <b>Product Page</b>
                            </p>
                        </a>
                    </li>
                    {/* Add GitHub link here if available */}
                </ul>
            </div>

            {/* Project 3: APK-SWAP */}
            <div className="text-block">
                <h2>APK-SWAP</h2>
                <br />
                <p>
                    Engineered a Remote Browser Isolation (RBI) service, comparable to Kasm, to provide secure internet access for clients in sensitive environments.
                </p>
                <br />
                <p>
                    <em>Role & Technologies: Spearheaded the DevOps strategy, including CI/CD pipeline design, containerization with Docker, and infrastructure automation using Ansible for this service.</em>
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://apk-group.net/products/apkswap-3"
                        >
                            <p>
                                <b>Product Page</b>
                            </p>
                        </a>
                    </li>
                    {/* Add GitHub link here if available */}
                </ul>
            </div>
            
            {/* Original projects have been removed. */}
        </div>
    );
};

// Styles (keeping original for brevity, ensure they still make sense or simplify if needed)
const styles: StyleSheetCSS = {
    caption: {
        width: '80%',
        textAlign: 'center',
        fontSize: '0.8rem',
        color: 'grey',
        margin: 'auto',
        marginBottom: 16,
    },
};

interface StyleSheetCSS {
    [key: string]: React.CSSProperties;
}

export default SoftwareProjects;
