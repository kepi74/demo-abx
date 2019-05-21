import axios from 'axios';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import ApiError from '../components/ApiError';
import ListOfPersons from '../components/ListOfPersons';
import { IPerson } from '../types';

const ListOfPersonsScene: React.FC = () => {
  const [t] = useTranslation();
  const [loading, setIsloading] = React.useState<boolean>(false);
  const [error, setIsError] = React.useState<boolean>(false);
  const [persons, setPersons] = React.useState<IPerson[]>([]);
  React.useEffect(() => {
    const fetchData = async() => {
      setIsloading(true);
      try {
        const response = await axios.get(process.env.REACT_APP_API || '');
        setPersons(response.data);
      } catch (error) {
        setIsError(true);
      }
      setIsloading(false);
    };
    fetchData();
  },              []);

  return (
    <>
      <h1>{t('list.pageTitle')}</h1>
      <ApiError t={t} error={error} />
      <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>
        <Link to="/create-person">
          <Button color="primary">{t('list.createPerson')}</Button>
        </Link>
      </div>
      <ListOfPersons t={t} loading={loading} error={error} persons={persons} />
    </>
  );
};

export default ListOfPersonsScene;
