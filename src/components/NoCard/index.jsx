import "./style.css";

function NoCard({ card }) {
  return (
    <div className="empty-card">
      <h2>No releases yet</h2>
      <div>
        <img src={card} alt="no releases yet" />
      </div>
    </div>
  );
}

export default NoCard;
