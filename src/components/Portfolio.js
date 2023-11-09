import "./style.css";
import { useRef } from "react";
import lightbox from "lightbox-react";

const Home = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const navBar = useRef(null);

  // Sticky navigation bar code

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navBar.current.classList.add("sticky");
    } else {
      navBar.current.classList.remove("sticky");
    }
  });

  // Lightbox code

  const openLightbox = (image) => {
    setIsLightboxOpen(true);
    lightbox.open(image);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    lightbox.close();
  };

  return (
    <div className="App">
      <div className="hero">
        <ul>
          <li onClick={() => scrollToSection(home)} class="link">Home</li>
          <li onClick={() => scrollToSection(about)} class="link">About me</li>
          <li onClick={() => scrollToSection(skills)} class="link">Skills</li>
          <li onClick={() => scrollToSection(projects)} class="link">Projects</li>
          <li onClick={() => scrollToSection(contact)} class="link">Contact details</li>
        </ul>
      </div>

      <div ref={navBar} className="sticky">
        <h3 className="heading">My Portfolio</h3>
      </div>

      <div className="home">
        <h3 className="heading">Home</h3>

        <table>
          <tr>
            <td><h3 class="i1">Hi</h3></td>
            <td><h3 class="i1">I am Kusumita</h3></td>
            <td><h3 class="i1">Welcome to my portfolio</h3></td>
     
          </tr>
        </table>
      </div>
            <div ref={about} class="about">
                <h3 className="heading">About me</h3>
                <h4>Highly motivated and detail-oriented B.Tech graduate seeking a challenging position in
                    the software engineering field. Offering a strong foundation in coding, along with a passion
                    for artificial intelligence and machine learning. Committed to continuous learning and
                    professional growth, with a proven ability to adapt to new technologies and work
                    collaboratively in team environments.
                </h4>

            </div>
            <div ref={skills} class="skills">
                <h3 className="heading">My skills</h3>
                <h4>➢ MS Office [Power Point, Excel and Word].</h4>
                <h4>➢ Programming languages: Java.</h4>
                <h4>➢ Web technologies:Html,CSS,JavaScript,PHP.</h4>
                <h4>➢ Artificial intelligence and machine learning, cloud computing, web
                    technologies,softskills.</h4>
                <h4>➢ Database: Oracle</h4>
                <h4>➢ Strong mathematical and logical reasoning abilities</h4>
            </div>
            <div ref={projects} class="projects">
                <h3 class="heading">Projects done by me</h3>
                <h4>➢ Voice control car using Arduino Uno.</h4>
                <h4>➢ Smart pill box using the .</h4>
                <h4>➢ Object detection using Arduino.</h4>
            </div>
            <div ref={contact} class="contact">
                <h3 class="heading">Contact details</h3>
                <h4>Email me at Kusumita032004@gmail.com</h4>
                <h4>Contact Number 6301342392</h4>
                <h4>My GitHub link <a href="https://github.com/KUSUMITA03">It's here</a></h4>
            </div>
                         <lightbox isOpen={isLightboxOpen} onClose={closeLightbox}>
        <img src={image} />
      </lightbox>
    </div>
  );
};

export default Home;

     
