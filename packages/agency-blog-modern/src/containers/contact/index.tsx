import * as React from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from './style';

interface MyFormValues {
  firstName: string;
  email: string;
  message: string;
  source: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Gerekli'),
  email: Yup.string().email('Geçersiz mail').required('Gerekli'),
  message: Yup.string().required('Gerekli'),
});

const Contact: React.SFC<{}> = () => {
  return (
    <Formik
      initialValues={{ firstName: '', email: '', message: '', source: '' }}
      onSubmit={(values: MyFormValues, actions: any) => {
        setTimeout(async () => {
          values.source = process.env.SITE_URL || "bursaintegralyonetim.com";
          const response = await fetch(`https://getform.io/f/${process.env.GETFORM_KEY}`, {
            method: "post",
            headers: {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: JSON.stringify(values),
          })
          if (response.status === 200) {
            alert("Mail başarıyla iletildi. En kısa sürede sizinle iletişime geçilecektir.");
          } else {
            alert("Mail iletilemedi. Tekrar deneyin.");
          }
          actions.setSubmitting(false);
        }, 700);
      }}
      validationSchema={SignupSchema}
      render={({
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
        isSubmitting,
      }: FormikProps<MyFormValues>) => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
                <h2>Bize Ulaşın</h2>
                <p>
                  Bursa İntegral Profesyonel Site Yönetimi &amp; Danışmanlık Hizmetleri,
                  hizmet verdiği müşterilerine karşı hukuki, mali ve ekonomik sorumluluklarını yerine getirerek gayrimenkullerinize değer katar.
                  Soru ve görüşleriniz için bize yazın.
                </p>
              </ContactPageTitle>
              <ContactFromWrapper>
                <InputGroup>
                  <Input
                    type="text"
                    name="firstName"
                    value={`${values.firstName}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Adı Soyadı"
                    notification={`${errors.firstName && touched.firstName
                      ? errors.firstName
                      : ''
                      }`}
                  />
                  <Input
                    type="email"
                    name="email"
                    value={`${values.email}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="E-mail"
                    notification={`${errors.email && touched.email ? errors.email : ''
                      }`}
                  />
                </InputGroup>
                <Input
                  type="textarea"
                  name="message"
                  value={`${values.message}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Konu"
                  notification={
                    errors.message && touched.message ? errors.message : ''
                  }
                />
                <Button
                  title="Gönder"
                  type="submit"
                  isLoading={isSubmitting ? true : false}
                  loader="Gönderiliyor.."
                />
              </ContactFromWrapper>
            </ContactWrapper>
          </Form>
        </>
      )}
    />
  );
};

export default Contact;
