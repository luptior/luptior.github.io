import React from "react";

const meta = {
    title: 'Gan Xu\'s Personal Website Courses',
    description: 'I am a description, and I can create multiple tags',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        },
        viewport: 'width=device-width, initial-scale=1'
    }
}

function Home() {
    return(
        <div class="wrapper">
            <div class="hidden">
                <a href="#maincontent">Skip to main content</a>
            </div>

            <main id="maincontent"></main>
            <section>
                <br/>
                <br/>
                <br/>

                <img src="resources/glacier.jpg" alt="glacier"></img>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p> I'm a Software Engineer at Snap Inc. </p>
                <p>Firm supporter of <a href="https://www.pypy.org">PyPy</a></p>
                <p>Playing with Kotlin.</p>
                <p>
                    <del>I’m now a Ph.D. student in the Department of Computer Science and Engineering at Washington University.
                        I'm advised by <a href="https://sites.wustl.edu/wyeoh/">Dr. William Yeoh</a> and working on Distributed
                        Constrained Optimization.
                    </del>
                    <br/><br/>
                    I was an undergraduate researcher and assistant bioinformatic analyst after graduation at <a
                        href="https://bio.unc.edu/faculty-profile/cdjones/">Corbin Jones's Lab</a>.
                </p>

                <br/> 

                <br/>
                <br/>
                <br/>

            </section>
        </div>
    );
}

export default Home;