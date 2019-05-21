import i18next from 'i18next';
import * as React from 'react';
import { default as TestRenderer } from 'react-test-renderer';
import ApiError from '../ApiError';

describe('ApiError Component', () => {
  const t = (key: string) => key;

  it('should render error alert if error property is true', () => {
    const tree = TestRenderer
      .create(<ApiError t={t as i18next.TFunction} error={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should not render error alert if error property is false', () => {
    const tree = TestRenderer
      .create(<ApiError t={t as i18next.TFunction} error={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
