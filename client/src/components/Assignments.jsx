import "../styles/Assignments.scss";

const Assignments = () => {
  return (
    <section className="assignments">
      <h1>Assignments</h1>
      <div className="assignment-cards">
        <article className="assignment-card">
          <h2>Day 12 CW</h2>
          <h3>Class</h3>
          <p>HPrecalculus</p>
          <h3>Due Date</h3>
          <p>Wednesday, Feburary 28</p>
          <div className="assignment-card-button-group">
            <button>
              <i className="bi bi-check-lg"></i>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Assignments;
