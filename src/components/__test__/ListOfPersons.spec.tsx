import i18next from 'i18next';
import * as React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import { IPerson } from '../../types';
import ListOfPersons from '../ListOfPersons';

describe('ListOfPersons Component', () => {
  const t = (key: string) => key;

  const persons: IPerson[] = [
    { email: 'kepi@kepi.name', id: 'aaa', name: 'Pavel', surname: 'Kepka' },
    { email: 'janca.kantoj@gmail.com', id: 'bbb', name: 'Jana', surname: 'Kantorová' },
  ];

  it('renders spinner if loading property is true', () => {
    const tree = TestRenderer
      .create(<ListOfPersons t={t as i18next.TFunction} loading={true} error={false} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders noData row if error property is true', () => {
    const tree = TestRenderer
      .create(<ListOfPersons t={t as i18next.TFunction} loading={false} error={true} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders noData row if persons property is empty array', () => {
    const tree = TestRenderer
      .create(
        <ListOfPersons t={t as i18next.TFunction} loading={false} error={false} persons={[]} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders noData row if persons property is undefined', () => {
    const tree = TestRenderer
      .create(
        <ListOfPersons t={t as i18next.TFunction} loading={false} error={false} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders content of table if persons property is provided', () => {
    const tree = TestRenderer
      .create(
        <ListOfPersons
          t={t as i18next.TFunction}
          loading={false}
          error={false}
          persons={persons}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
