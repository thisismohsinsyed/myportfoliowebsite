import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          ML Engineer and researcher with a Ph.D. in Engineering and 6+ years of
          experience across industry and academia. I design and deploy
          production-grade AI systems — end-to-end pipelines using PyTorch,
          TensorFlow, FastAPI, and Docker across GPU and distributed
          environments. I build Agentic AI and LLM-powered systems, including
          RAG pipelines with embeddings and vector databases.
        </p>
      </div>
    </div>
  );
};

export default About;
