import s from './Options.module.css';

const Options = ({
  voteData,
  updateFeedback,
  totalFeedback,
  handleResetVoteData,
}) => {
  const btnOptions = Object.keys(voteData);

  return (
    <ul className={s.list}>
      {btnOptions.map(option => (
        <li key={crypto.randomUUID()}>
          <button className={s.btn} onClick={() => updateFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button className={s.btn} onClick={() => handleResetVoteData()}>
            reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
