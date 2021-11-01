import React from "react";

function Footer() {
    return(
        <footer>
            <info>Languages:</info><br/>
            <info>Python, Kotlin/Java, C/C++, Shell, HTML,  CSS, JavaScript</info>
            <br/>
            <br/>
            <info><a href="courses.html">Related Courses</a></info>
            <br/>
            <info><a href="projects.html">Previous Projects</a></info>
            <br/>
            <br/>
            <div class="container space-around">
                <div><a href="mailto:gan.xu@wustl.edu"><img src="https://simpleicons.org/icons/maildotru.svg" width="30px" height="30px" viewBox="0 0 24 24" alt="mail_svg"/></a></div>
                <div><a href="https://github.com/luptior"><img src="https://simpleicons.org/icons/github.svg" width="30px" height="30px" viewBox="0 0 24 24" alt="github_svg"/></a></div>
                <div><a href="https://www.instagram.com/aspartame_xu/"><img src="https://simpleicons.org/icons/instagram.svg" width="30px" height="30px" viewBox="0 0 24 24" alt="ins_svg"/></a></div>
                <div><a href="https://www.linkedin.com/in/ganxu/"><img src="https://simpleicons.org/icons/linkedin.svg" width="30px" height="30px" viewBox="0 0 24 24" alt="linkedin_svg"/></a></div>
            </div>
            <br/>
        </footer>
    );
}
    
export default Footer;