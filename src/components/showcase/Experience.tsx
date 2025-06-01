import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Amn Pardazan Kavir</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://apk-group.net/'}
                        >
                            <h4>www.apk-group.net</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>DevOps Coordinator</h3>
                        <b>
                            <p>Nov. 2022 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>Coordinated a team of 3 engineers in implementing and optimizing core infrastructure services.</p>
                    </li>
                    <li>
                        <p>Helped architect a microservice architecture and oversaw its implementation.</p>
                    </li>
                    <li>
                        <p>Integrated Technologies to achieve scalability, provisioning and deployment.</p>
                    </li>
                    <li>
                        <p>Collaborated to improve service performance and reliability through monitoring, logging and incident response.</p>
                    </li>
                    <li>
                        <p>Actively participated in team meetings, knowledge sharing sessions and scrum ceremonies to improve both myself and my teammates.</p>
                    </li>
                    <li>
                        <p>Developed automation scripts for deployment and error handling.</p>
                    </li>
                    <li>
                        <p>Contributed to common branching strategies and remade the Ci/Cd pipeline.</p>
                    </li>
                    <li>
                        <p>Utilized Ansible playbooks for configuration management, upkeep and deployment of services.</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Hoodad Tech</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://hoodadtech.com/'}
                        >
                            <h4>www.hoodadtech.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>DevOps Engineer</h3>
                        <b>
                            <p>Sep. 2020 - Nov. 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>Designed and implemented key components of the company's network infrastructure.</p>
                    </li>
                    <li>
                        <p>Contributed to the development and implementation of DevOps and SDLC best practices and tools.</p>
                    </li>
                    <li>
                        <p>Streamlined deployment processes by implementing a centralized repository and automating the deployment system.</p>
                    </li>
                    <li>
                        <p>Managed and maintained server infrastructure, including virtualization, alerting systems and server management.</p>
                    </li>
                    <li>
                        <p>Implemented documentation culture and tools.</p>
                    </li>
                    <li>
                        <p>Played the role of Scrum Master for a couple of months.</p>
                    </li>
                    <li>
                        <p>And even though I don't work at Hoodad anymore, I still consult them about their services and products.</p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Razman.Co</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Infra Admin - SRE</h3>
                        <b>
                            <p>July 2016 - Sep. 2020</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>Administered, co-located and self hosted servers.</p>
                    </li>
                    <li>
                        <p>Managed the network infrastructure.</p>
                    </li>
                    <li>
                        <p>Gave testing and troubleshooting solutions to ensure compatibility with industry standards.</p>
                    </li>
                    <li>
                        <p>Set up local repositories/artifactories.</p>
                    </li>
                    <li>
                        <p>Implemented and managed radio connections with different branches of the company.</p>
                    </li>
                    <li>
                        <p>Led the containerization efforts (Docker) for various projects, ensuring efficient deployment and isolation.</p>
                    </li>
                    <li>
                        <p>Automated build processes for both Stage and Production.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
