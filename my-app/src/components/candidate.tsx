import type { CandidateType } from "@/types/candidates";
import "./candidate.css";

const Candidate = (props: CandidateType) => {
  const { name, age, experience, status, skills, working } = props;

  return (
    <div className="candidate__container">
      <div className="candidate__name">
        <h2>{name?.toUpperCase()}</h2>
      </div>
      <p>
        <strong>ID:</strong> {randomNumber()}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Experience:</strong> {experience} years
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      <p>
        <strong>Working:</strong>{" "}
        {working ? (
          <span style={{ color: "green" }}>Active 🟢</span>
        ) : (
          <span style={{ color: "red" }}>Inactive 🔴</span>
        )}
      </p>

      <div className="candidate__skills">
        <p>
          <strong>Skills:</strong>
        </p>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="candidate__actions">
        <button className="candidate__action" onClick={copyToClipboard}>
          Copiar datos
        </button>
      </div>
    </div>
  );

  function randomNumber() {
    return Math.floor(Math.random() * 100);
  }

  function copyToClipboard() {
    const textToCopy = `Name: ${name}, Age: ${age}, Experience: ${experience}, Status: ${status}, Skills: ${skills.join(", ")}`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Los datos han sido copiados exitosamente!");
      })
      .catch((err) => {
        console.error("Error al copiar los datos: ", err);
      });
  }
};

export default Candidate;
