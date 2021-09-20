import PropTypes from 'prop-types';
import { BtnFeedback } from 'components/FeedbackOptions/BtnFeedback';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <BtnFeedback text="Good" onClick={onLeaveFeedback} />
      <BtnFeedback text="Neutral" onClick={onLeaveFeedback} />
      <BtnFeedback text="Bad" onClick={onLeaveFeedback} />
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
