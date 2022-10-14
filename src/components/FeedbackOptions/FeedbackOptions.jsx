import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Button } from '../Button';
// import { HiEmojiHappy } from 'react-icons/hi';

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
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

// export const protoFeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <Box width={1} display="flex" alignItems="center">
//       {Object.entries(options).map(([key]) => {
//         return (
//           <Button
//             key={key}
//             onClick={() => {
//               onLeaveFeedback(key);
//             }}
//           >
//             {key}
//           </Button>
//         );
//       })}
//     </Box>
//   );
// };
