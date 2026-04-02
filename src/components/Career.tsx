import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Engineer</h4>
                <h5>Multiverse Computing · Zaragoza, Spain</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building end-to-end data and model pipelines. Prototyping novel
              LLM architectures and training methods for NLP and generative AI.
              Implementing model compression and optimization for scalable
              deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Engineer</h4>
                <h5>Quebec Inc · Remote, Canada</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and deployed production-grade ML, Deep Learning, and
              LLM-based systems for arbitrage, user acquisition, and marketing
              automation pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Engineer</h4>
                <h5>Aurakore IT Solutions · Remote, USA</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed multi-agent AI systems based on MCP. Deployed FastAPI
              microservices. Fine-tuned domain-specific LLMs with LoRA and
              quantization. Evaluated LLM performance using NLP benchmarks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Asst.</h4>
                <h5>DeustoTech, Univ. of Deusto · Bilbao, Spain</h5>
              </div>
              <h3>2023–25</h3>
            </div>
            <p>
              Deployed ML pipelines for real-time particulate matter estimation.
              Built RESTful APIs and containerized AI models on HPC
              infrastructure using Docker and GitHub Actions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Visiting Researcher</h4>
                <h5>NILU · Oslo, Norway</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Conducted advanced research on image processing pipelines for
              environmental data analysis. Developed ML models to automate PM
              detection and quantification.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Lecturer</h4>
                <h5>SZABIST · Islamabad, Pakistan</h5>
              </div>
              <h3>2019–23</h3>
            </div>
            <p>
              Delivered courses in Software Engineering, Deep Learning, Computer
              Vision, and AI. Mentored students on industry-focused projects and
              supervised speech/emotion recognition research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
