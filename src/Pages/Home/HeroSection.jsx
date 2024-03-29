export default function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey I'm Hajira</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Full stack</span> <br />
            Developer
          </h1>
          <p className="hero-section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Ipsam facilis aliquid sapiente accusamus aperiam.
          </p>
        </div>
        <button className="btn btn-primary">Get in touch</button>
      </div>
      <div className="hero-section-img">
        <img src="./img/hero_img.png" alt="Hero section" />
      </div>
    </section>
  );
}
