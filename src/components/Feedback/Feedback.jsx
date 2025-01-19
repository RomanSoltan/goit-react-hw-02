const Feedback = ({ voteData, totalFeedback, positiveFeedback }) => {
  const btnOptions = Object.keys(voteData);

  return (
    <ul>
      {btnOptions.map(item => (
        <li key={crypto.randomUUID()}>
          <p>
            {item}: {voteData[item]}
          </p>
        </li>
      ))}
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {positiveFeedback}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
