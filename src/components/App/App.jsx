import React, { Component } from 'react';
import { Layout } from './App.styled';
// import { FeedbackOptions, Statistics } from 'components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback = 0;
  //   positiveFeedbackPercentage = 0;

  addFeedback = event => {
    const { id } = event.target;
    this.setState(({ good, neutral, bad }) => {
      switch (id) {
        case 'good':
          return { good: good + 1 };
        case 'neutral':
          return { neutral: neutral + 1 };
        case 'bad':
          return { bad: bad + 1 };
      }
    });
  };

  //   addGoodFeedback = () => {
  //     this.setState(prevState => ({ good: prevState.good + 1 }));
  //   };
  //   addNeutralFeedback = () => {
  //     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  //   };
  //   addBadFeedback = () => {
  //     this.setState(prevState => ({ bad: prevState.bad + 1 }));
  //   };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    this.totalFeedback = good + neutral + bad;
    return this.totalFeedback;
  }
  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.totalFeedback) * 100).toFixed(0);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Layout>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" id="good" onClick={this.addFeedback}>
            Good
          </button>
          <button type="button" id="neutral" onClick={this.addFeedback}>
            Neutral
          </button>
          <button type="button" id="bad" onClick={this.addFeedback}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {this.countTotalFeedback()}</span>
        <span>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </span>
      </Layout>
    );
  }
}

export { App };

// render() {
//     return (
//       <Layout>
//         <FeedbackOptions></FeedbackOptions>
//         <Statistics></Statistics>
//       </Layout>
//     );
//   }
