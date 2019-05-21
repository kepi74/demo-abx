import i18next from 'i18next';
import * as React from 'react';
import { Spinner, Table } from 'reactstrap';
import { IPerson } from '../types';

const renderPersonRow = ({ id, name, surname, email }: IPerson) => (
  <tr key={id}>
    <td>{name || ''}</td>
    <td>{surname}</td>
    <td>
      <a href={`mailto:${email}`}>{email}</a>
    </td>
  </tr>
);

interface IListOpPersonsProps {
  t: i18next.TFunction;
  persons?: IPerson[];
  loading: boolean;
  error: boolean;
}

const ListOfPersonsTBody: React.FC<IListOpPersonsProps> = ({
  t,
  persons,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <tr>
        <td colSpan={3}>
          <Spinner color="secondary" size="sm" />
          {' '}
          {t('list.loading')}
        </td>
      </tr>
    );
  }
  if (error || !persons || !persons.length) {
    return (
      <tr>
        <td colSpan={3}>{t('list.noData')}</td>
      </tr>
    );
  }
  return (
    <>
      {persons.map(renderPersonRow)}
    </>
  );
};

const ListOfPersons: React.FC<IListOpPersonsProps> = ({
  t,
  ...rest
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>{t('person.name')}</th>
          <th>{t('person.surname')}</th>
          <th>{t('person.email')}</th>
        </tr>
      </thead>
      <tbody>
        <ListOfPersonsTBody t={t} {...rest} />
      </tbody>
    </Table>
  );
};

export default ListOfPersons;
