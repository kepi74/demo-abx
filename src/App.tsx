import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListOfPersonsScene from './scenes/ListOfPersonsScene';
import CreatePersonScene from './scenes/CreatePersonScene';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={ListOfPersonsScene} />
      <Route path="/create-person" component={CreatePersonScene} />
    </Router>
  );
};

export default App;
