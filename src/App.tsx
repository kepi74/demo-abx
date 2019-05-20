import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import CreatePersonScene from './scenes/CreatePersonScene';
import ListOfPersonsScene from './scenes/ListOfPersonsScene';

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Route exact={true} path="/" component={ListOfPersonsScene} />
        <Route path="/create-person" component={CreatePersonScene} />
      </Container>
    </Router>
  );
};

export default App;
