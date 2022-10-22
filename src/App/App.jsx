import { useState, useEffect } from 'react';
import { Box } from '../components/Box';
import { Section } from '../components/Section';
import { FeedbackOptions } from '../components/FeedbackOptions';
import { Statistics } from '../components/Statistics';
import { Notification } from '../components/Notification';

export const App = () => {
  const initialValue = 0;
  const step = 1;

  const [good, setGood] = useState(initialValue);
  const [neutral, setNeutral] = useState(initialValue);
  const [bad, setBad] = useState(initialValue);
  const [total, setTotal] = useState(initialValue);
  const [positive, setPositive] = useState(initialValue);

  const countFeedback = e => {
    const { textContent } = e.target;

    switch (textContent) {
      case 'Good':
        setGood(prevState => prevState + step);
        break;

      case 'Neutral':
        setNeutral(prevState => prevState + step);
        break;

      case 'Bad':
        setBad(prevState => prevState + step);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    const total = good + neutral + bad;
    document.title = `Total Feedback Count: ${total}`;
  }, [good, neutral, bad]);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositive(((good / total) * 100).toFixed(2));
  }, [good, total]);

  function checkForData() {
    return good > 0 ?? neutral > 0 ?? bad > 0;
  }

  return (
    <>
      <Box as="main">
        <Box mb={2} p={2} width="50%" as="section">
          <Section title="Please leave feedback">
            <FeedbackOptions
              good={good}
              neutral={neutral}
              bad={bad}
              handleFeedback={countFeedback}
            />
          </Section>
        </Box>
        <Box p={2} width="50%" as="section">
          <Section title="Statistics">
            {!checkForData() && <Notification message="There is no feedback" />}
            {checkForData() && (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positive}
              />
            )}
          </Section>
        </Box>
      </Box>
    </>
  );
};

// export class protoApp extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   static propTypes = {};

//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   stateEntries = () => {
//     return Object.entries(this.state);
//   };

//   countFeedback = key => {
//     this.setState(prevState => ({
//       [key]: prevState[key] + this.props.step,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.stateEntries().reduce((acc, [key, value]) => acc + value, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const positiveFeedback = this.stateEntries().reduce(
//       (acc, [key, value]) => (key === 'good' ? acc + value : acc),
//       0
//     );
//     return ((positiveFeedback / this.countTotalFeedback()) * 100).toFixed(2);
//   };

//   checkForData = () => {
//     return Object.values(this.state).some(item => item > 0);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <Box as="main">
//           <Box mb={2} p={2} width="50%" as="section">
//             <Section title="Please leave feedback">
//               <FeedbackOptions
//                 options={this.state}
//                 onLeaveFeedback={this.countFeedback}
//               />
//             </Section>
//           </Box>
//           <Box p={2} width="50%" as="section">
//             <Section title="Statistics">
//               {!this.checkForData() && (
//                 <Notification message="There is no feedback" />
//               )}
//               {this.checkForData() && (
//                 <Statistics
//                   good={good}
//                   neutral={neutral}
//                   bad={bad}
//                   total={this.countTotalFeedback}
//                   positivePercentage={this.countPositiveFeedbackPercentage}
//                 />
//               )}
//             </Section>
//           </Box>
//         </Box>
//       </>
//     );
//   }
// }
