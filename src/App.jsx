import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const App = () => {
  const [voteData, setVoteData] = useState(() => {
    const defaultData = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    const storageData = JSON.parse(localStorage.getItem('storageValue'));
    if (storageData?.length) {
      return storageData;
    }
    return defaultData;
  });

  console.log(voteData);

  useEffect(() => {
    localStorage.setItem('voteData', JSON.stringify(voteData));
  }, [voteData]);

  const updateFeedback = feedbackType => {
    setVoteData(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = voteData.good + voteData.neutral + voteData.bad;
  const positiveFeedback = Math.round((voteData.good / totalFeedback) * 100);
  const handleResetVoteData = () => {
    setVoteData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        voteData={voteData}
        totalFeedback={totalFeedback}
        handleResetVoteData={handleResetVoteData}
      />
      {totalFeedback > 0 ? (
        <Feedback
          voteData={voteData}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
