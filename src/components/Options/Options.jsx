const Options = ({
  voteData,
  updateFeedback,
  totalFeedback,
  handleResetVoteData,
}) => {
  const btnOptions = Object.keys(voteData);

  return (
    <ul>
      {btnOptions.map(option => (
        <li key={crypto.randomUUID()}>
          <button onClick={() => updateFeedback(option)}>{option}</button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button onClick={() => handleResetVoteData()}>reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
