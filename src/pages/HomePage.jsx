import "../styles/homepage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/app");
  }
  return (
    <section className="hero">
      <h1>
        You travel the world. <br />
        We keep all the beautiful memories for you.
      </h1>
      <p>
        Memo is a simple and easy to use app that allows you to store your
        memories in one place. You can add, edit and delete your memories. You
        can also view your memories in a beautiful way.
      </p>
      <button className="cta-btn" onClick={handleClick}>
        Get Started
      </button>
    </section>
  );
}
