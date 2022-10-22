import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Button } from '../Button';

export const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <Box width={1} display="flex" alignItems="center">
      <Button onClick={handleFeedback}>Good</Button>
      <Button onClick={handleFeedback}>Neutral</Button>
      <Button onClick={handleFeedback}>Bad</Button>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func,
};
