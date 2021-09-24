import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function BtnFeedback(props) {
  return (
    <Button type="button" onClick={props.onClick}>
      {props.text}
    </Button>
  );
}

BtnFeedback.propTypes = {
  props: PropTypes.string.isRequired,
};
