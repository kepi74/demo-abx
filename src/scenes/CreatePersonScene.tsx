import { default as axios } from 'axios';
import { Field, FieldProps, Form, Formik } from 'formik';
import i18next from 'i18next';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, Col, FormFeedback, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import ApiError from '../components/ApiError';
import { IPersonData } from '../types';

type FieldName = 'name' | 'surname' | 'email';

const PersonSchema = Yup.object().shape({
  email: Yup.string()
    .email('email')
    .required('required'),
  name: Yup.string()
    .min(4, 'minLength'),
  surname: Yup.string()
    .min(4, 'minLength')
    .required('required'),
});

const EMPTY_PERSON: IPersonData = { name: '', surname: '', email: '' };

const renderField = (t: i18next.TFunction, fieldName: FieldName) =>
  ({ field, form }: FieldProps<IPersonData>) => {
    const invalid = Boolean(form.errors[fieldName]);
    const valid = form.touched[fieldName] && !form.errors[fieldName];
    const feedback = invalid
      ? (
        <FormFeedback valid={form.touched[fieldName] && !form.errors[fieldName]}>
          {t(`form.errors.${form.errors[fieldName]}`)}
        </FormFeedback>
      )
      : null;
    return (
      <FormGroup>
        <Label htmlFor={fieldName}>{t(`person.${fieldName}`)}</Label>
        <Input
          type="text"
          {...field}
          placeholder={t(`person.${fieldName}`)}
          valid={valid}
          invalid={invalid}
        />
        {feedback}
      </FormGroup>
    );
  };

const CreatePersonScene: React.FC<RouteComponentProps> = ({ history }) => {
  const [t] = useTranslation();
  const [loading, setIsloading] = React.useState<boolean>(false);
  const [error, setIsError] = React.useState<boolean>(false);
  const [person, setPerson] = React.useState<IPersonData>(EMPTY_PERSON);
  React.useEffect(
    () => {
      const savePerson = async () => {
        setIsloading(true);
        try {
          await axios.post(
            process.env.REACT_APP_API || '',
            person,
          );
          setIsloading(false);
          history.replace('/');
        } catch (error) {
          setIsloading(false);
          setIsError(true);
        }
      };
      if (person.surname && person.email) {
        savePerson();
      }
    },
    [person.name, person.surname, person.email, history, person],
  );

  const formSubmit = (values: IPersonData) => {
    setPerson(values);
  };

  const resetForm = () => setPerson(EMPTY_PERSON);
  return (
    <>
      <h1>{t('form.pageTitle')}</h1>
      <ApiError t={t} error={error} />
      <Formik
        initialValues={person}
        validationSchema={PersonSchema}
        onSubmit={formSubmit}
      >
        <Form>
          <Field
            name="name"
            render={renderField(t, 'name')}
          />
          <Field
            name="surname"
            render={renderField(t, 'surname')}
          />
          <Field
            name="email"
            render={renderField(t, 'email')}
          />
          <Row>
            <Col>
              <Button color="primary" type="submit">
                {loading && (<Spinner color="secondary" size="sm" />)}
                {t('form.submit')}
              </Button>
            </Col>
            <Col>
              <Button color="danger" type="reset" onClick={resetForm}>{t('form.reset')}</Button>
            </Col>
            <Col>
              <Link to="/">{t('form.back')}</Link>
            </Col>
          </Row>
        </Form>
      </Formik>
    </>
  );
};

export default withRouter(CreatePersonScene);
