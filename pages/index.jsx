import React from "react";
import FullPage from "../components/FullPage";
import Fade from "react-reveal/Fade";

const MyWeb = () => {
    return (
    <>
        <Fade>
            <FullPage title="PROFILE">
                <h2>This Full Page Is PROFILE</h2>
                <div>Will be write developer's name, from school, location ETC ....</div>
            </FullPage>
        </Fade>
        <Fade>
            <FullPage title="SKILL">
                <h2>This Full Page Is PROFILE</h2>
                <div>Will be write developer's Skills which coding langauge, Database ETC ....</div>
            </FullPage>
        </Fade>
        <Fade>
            <FullPage title="WORKS">
                <h2>This Full Page Is PROFILE</h2>
                <div>Will be write developer's Skills which coding langauge, Database ETC ....</div>
            </FullPage>
        </Fade>
        <Fade>
            <FullPage title="CONTENT">
                <h2>This Full Page Is PROFILE</h2>
                <div>Will be write developer's Skills which coding langauge, Database ETC ....</div>
            </FullPage>
        </Fade>
    </>
    )
}

export default MyWeb;