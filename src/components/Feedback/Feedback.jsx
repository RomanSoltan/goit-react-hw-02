import s from './Feedback.module.css';

const Feedback = ({ voteData, totalFeedback, positiveFeedback }) => {
  const btnOptions = Object.keys(voteData);

  return (
    <ul className={s.list}>
      {btnOptions.map(item => (
        <li key={crypto.randomUUID()}>
          <p className={s.descr}>
            {item}: <span className={s.span}>{voteData[item]}</span>
          </p>
        </li>
      ))}
      <li>
        <p className={s.descr}>Total: {totalFeedback}</p>
      </li>
      <li>
        <p className={s.descr}>Positive: {positiveFeedback}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
