import "../styles/hero.css"; // Import the custom CSS file

export default function Hero() {
  return (
    <main className="hero-container">
      {/* Left Section */}
      <div className="hero-text">
        <h2>Hello <br /> I'm Malaika</h2>
        <p>
          I am a passionate Front-End Development student currently working on
          various projects to enhance my skills and knowledge. I am constantly
          learning and experimenting with new technologies and techniques. I
          enjoy transforming ideas into functional designs and am excited to
          continue growing in this field.
        </p>
      </div>

      {/* Right Section */}
      <div className="hero-image">
        <img src="/img1.webp" alt="Profile" />
      </div>
    </main>
  );
}
