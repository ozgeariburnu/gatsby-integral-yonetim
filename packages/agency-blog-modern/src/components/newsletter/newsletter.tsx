import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Input from '../input/input';
import Button from '../button/button';
import {
  NewsletterWrapper,
  NewsletterInnerWrapper,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterInputWrapper,
  ErrorMessage,
  SuccessMessage,
} from './newsletter.style';

type NewsletterProps = {};

const Newsletter: React.FunctionComponent<NewsletterProps> = ({ ...props }) => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then(({ msg, result }: any) => {
        if (result !== 'success') {
          throw msg;
        }
        setSuccess(msg);
        setError('');
        setEmail('');
      })
      .catch((err: any) => {
        setError(err);
        setSuccess('');
        setEmail('');
      });
  };
  return (
    <NewsletterWrapper {...props}>
      <NewsletterInnerWrapper>
        <NewsletterTitle>
          En Son Gelişmelerden İlk Siz Haberdar Olun
        </NewsletterTitle>
        <NewsletterDescription>
          Bültenimize abone olun ve güncel kalın.
        </NewsletterDescription>

        <NewsletterInputWrapper onSubmit={handleSubmit}>
          {success ? (
            <SuccessMessage>{success} 🙂</SuccessMessage>
          ) : (
            <>
              <Input
                type="email"
                name="email"
                placeholder="E-mail adresinizi yazın"
                onChange={handleChange}
                value={email}
                required={true}
              />
              <Button title="Abone ol" type="submit" />
            </>
          )}
        </NewsletterInputWrapper>
        {error && (
          <ErrorMessage
            dangerouslySetInnerHTML={{ __html: `<span>*</span>${error}` }}
          />
        )}
      </NewsletterInnerWrapper>
    </NewsletterWrapper>
  );
};

export default Newsletter;
