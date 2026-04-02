import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    const cleanups: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let animFrameId: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animFrameId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animFrameId);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://www.linkedin.com/in/syed-mohsin-ali-shah/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://scholar.google.com/citations?user=gjNkrLMAAAAJ&hl"
            target="_blank"
            rel="noreferrer"
          >
            <FaGraduationCap />
          </a>
        </span>
        <span>
          <a
            href="https://www.youtube.com/@MachineLearningForEveryone"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/dr.mohsin.syed"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/Syed_Mohsin_Ali_Shah.pdf"
        download
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
