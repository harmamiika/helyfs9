import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Divider, Header, Container } from 'semantic-ui-react';

import { apiBaseUrl } from './constants';
import { useStateValue } from './state';
import { Patient } from './types';

import PatientListPage from './PatientListPage';
import PatientDetailPage from './PatientDetailPage';

import { setPatientList } from './state';

const App = () => {
  const [, dispatch] = useStateValue();
  React.useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        console.log(patientListFromApi, 'asdasddas');
        dispatch(setPatientList(patientListFromApi));
      } catch (e) {
        console.log(e);
      }
    };
    void fetchPatientList();
  }, [dispatch]);

  // console.log(patients, 'yooo');

  // const match = useRouteMatch('/patients/:id');
  // const patientToShow = match ? patients[match.params.id.toString()] : null;

  return (
    <div className="App">
      <Router>
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path="/patients/:id">
              <PatientDetailPage />
            </Route>
            <Route path="/">
              <PatientListPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
