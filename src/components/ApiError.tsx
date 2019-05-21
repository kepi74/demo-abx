import i18next from 'i18next';
import * as React from 'react';
import { Alert } from 'reactstrap';

interface IApiErrorProps {
  t: i18next.TFunction;
  error: boolean;
}

const ApiError: React.FC<IApiErrorProps> = ({ error = false, t }) => {
  if (!error) {
    return null;
  }
  return (
    <Alert color="danger">{t('list.errorLoadingData')}</Alert>
  );
};

export default ApiError;
