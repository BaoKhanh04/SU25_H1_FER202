import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  showResult: false,
  questions: [
    {
      id: 1,
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['<javascript>', '<scripting>', '<script>', '<js>'],
      correct: '<script>',
      selected: null
    },
    {
      id: 2,
      question: 'What are variables used for in JavaScript?',
      options: [
        'Storing numbers, dates, or other values',
        'Varying randomly',
        'Causing high-school algebra flashbacks',
        'None of these'
      ],
      correct: 'Storing numbers, dates, or other values',
      selected: null
    }
    // có thể thêm nhiều câu hơn ở đây
  ]
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { index, answer } = action.payload;
      state.questions[index].selected = answer;
    },
    next: (state) => {
      if (state.currentIndex < state.questions.length - 1) state.currentIndex += 1;
    },
    prev: (state) => {
      if (state.currentIndex > 0) state.currentIndex -= 1;
    },
    first: (state) => {
      state.currentIndex = 0;
    },
    last: (state) => {
      state.currentIndex = state.questions.length - 1;
    },
    submit: (state) => {
      state.showResult = true;
    }
  }
});

export const { selectAnswer, next, prev, first, last, submit } = quizSlice.actions;
export default quizSlice.reducer;
