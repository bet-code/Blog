import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise) (createStore);

class Hello extends React.Component {
  render() { return <div>Hello</div>}
}
class Goodbye extends React.Component {
  render() { return <div>Goodbye</div>}
}



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
        <div>
          <Route path="/hello" component={Hello} />
          <Route path="/goodbye" component={Goodbye} />
        </div>
      </Router>
    </Provider>,
  document.getElementById('app'));