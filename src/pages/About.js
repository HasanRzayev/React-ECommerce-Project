import Img from "../img/stepit.jpg";

const About = () => {
    return (
        <section className="container mx-auto">
            <div className='container flex flex-col lg:flex-row items-center justify-center pt-24 pb-12 gap-8'>
                <img className="min-w-[500px]" src={Img} alt=""></img>

                <div className="flex flex-col items-center gap-4">
                    <p>STEP IT Academy has been a leader in IT education since 1999. We are a large organization with hundreds of thousands of graduates worldwide. We specialize in IT education for both children and adults.</p>
					<p>During the lesson, we pay the greatest attention to practice. Our curriculum is always aligned with the IT industry and updated regularly. We make sure that we always provide the most relevant and in-demand knowledge to our graduates to help them become part of the best IT companies in the world.</p>
					<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
					<p>We are often asked how we are leaders in countries such as Brazil, Mexico, America, Cambodia, Georgia, Romania, Bulgaria, Switzerland, and Ukraine.</p>
					<p>In fact, there is no secret. We know exactly what is required in the labor market. We are sure that quality IT education is built on 3 main pillars: professional trainers, modern curriculum and thoughtful infrastructure.</p>
                </div>
            </div>
        </section>
    )
}

export default About