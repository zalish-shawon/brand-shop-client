import Blog from "../Blog/Blog";
import Brand from "../Brand/Brand";
import Hero from "../Hero/Hero";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Brand></Brand>
            <Blog></Blog>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;