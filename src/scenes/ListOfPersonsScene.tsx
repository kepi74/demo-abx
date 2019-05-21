import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Spinner, Table } from 'reactstrap';
import ApiError from '../components/ApiError';

interface IPerson {
  email: string;
  id: string;
  name?: string;
  surname: string;
}

const renderPersonRow = ({ id, name, surname, email }: IPerson) => (
  <tr key={id}>
    <td>{name || ''}</td>
    <td>{surname}</td>
    <td>
      <a href={`mailto:${email}`}>{email}</a>
    </td>
  </tr>
);

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
      <Table>
        <thead>
          <tr>
            <th>{t('person.name')}</th>
            <th>{t('person.surname')}</th>
            <th>{t('person.email')}</th>
          </tr>
        </thead>
        <tbody>
          {(persons.length === 0) && (<tr><td colSpan={3}>{t('list.noData')}</td></tr>)}
          {(persons.length > 0) && persons.map(renderPersonRow)}
          <tr>
            <td colSpan={3}>
              <Spinner color="secondary" size="sm" />
              {' '}
              {t('list.loading')}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ListOfPersonsScene;
