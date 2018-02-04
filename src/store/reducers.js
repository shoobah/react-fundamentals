const initialState = {
  messages: [{id: 0, text: `Hej på la!`}, {id: 1, text: `Jävla tomte`}, {id: 2, text: `Blääääää!`}]
};

const reducers = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        messages: state.messages.map(m => (m.id === action.id ? {id: action.id, text: action.text} : m))
      };
    default:
      return initialState;
  }
};
