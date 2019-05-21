import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import ApiError from '../components/ApiError';
import ListOfPersons from '../components/ListOfPersons';
import { IPerson } from '../types';

const ListOfPersonsScene: React.FC = () => {
  const [t] = useTranslation();
  const persons: IPerson[] = [
    { email: 'kepi@kepi.name', id: 'aaa', name: 'Pavel', surname: 'Kepka' },
    { email: 'janca.kantoj@gmail.com', id: 'bbb', name: 'Jana', surname: 'Kantorová' },
  ];
  return (
    <>
      <h1>{t('list.pageTitle')}</h1>
      <ApiError t={t} error={true} />
      <div style={{ paddingTop: '1em', paddingBottom: '1em' }}>
        <Link to="/create-person">
          <Button color="primary">{t('list.createPerson')}</Button>
        </Link>
      </div>
      <ListOfPersons t={t} loading={false} error={false} persons={persons} />
    </>
  );
};

export default ListOfPersonsScene;
