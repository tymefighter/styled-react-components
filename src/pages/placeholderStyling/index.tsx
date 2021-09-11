// Library
import React from 'react';

// Styles
import styles from './PlaceholderStyling.module.scss';

// Components
import { PageLayout } from 'modules/pageLayout';
import { Input } from 'modules/input';

export const PlaceholderStyling = () => {

  const [creditCardNumber, setCreditNumber] = React.useState('');
  const [creditCardExpiryDate, setCreditCardExpiryDate] = React.useState('');

  const _setCreditNumber = React.useCallback(creditCarNumberValue => {
    setCreditNumber(prevCreditCarNumberValue => {
      if([6, 11, 16].includes(prevCreditCarNumberValue.length)
        && creditCarNumberValue.length === prevCreditCarNumberValue.length - 1)

        return creditCarNumberValue.substring(0, creditCarNumberValue.length - 1);

      else if([4, 9, 14].includes(prevCreditCarNumberValue.length)
        && creditCarNumberValue.length === prevCreditCarNumberValue.length + 1)

        return prevCreditCarNumberValue + ' ' + creditCarNumberValue[creditCarNumberValue.length - 1];

      else 
        return creditCarNumberValue;
    })
  }, [setCreditNumber]);

  const _setCreditCardExpiryDate = React.useCallback(creditCardExpiryDate => {
    setCreditCardExpiryDate(prevCreditCardExpiryDate => {
      if(prevCreditCardExpiryDate.length === 3
        && creditCardExpiryDate.length === prevCreditCardExpiryDate.length - 1)

        return creditCardExpiryDate.substring(0, creditCardExpiryDate.length - 1);

      else if(prevCreditCardExpiryDate.length === 2
        && creditCardExpiryDate.length === prevCreditCardExpiryDate.length + 1)

        return prevCreditCardExpiryDate + '/' + creditCardExpiryDate[creditCardExpiryDate.length - 1];

      else 
        return creditCardExpiryDate;
    })

  }, [setCreditCardExpiryDate]);

  return (
    <PageLayout>
      <div className={styles.container}>
        <div>
          <label 
            className={styles.label}
            htmlFor="credit-card-number"
          >
              Credit Card Number:
            </label>
          <Input 
            id="credit-card-number"
            input={creditCardNumber}
            setInput={_setCreditNumber}
            placeholder="ABCD EFGH JKLM NOPQ"
            containerClassName={styles.input}
            fontSize="1.5rem"
            keepPlaceholderOnInput
          />
        </div>
        <div>
          <label 
            className={styles.label}
            htmlFor="credit-card-expiry-date"
          >
            Credit Card Expiry Date:
          </label>
          <Input 
            id="credit-card-expiry-date"
            input={creditCardExpiryDate}
            setInput={_setCreditCardExpiryDate}
            placeholder="mm/yyyy"
            containerClassName={styles.input}
            fontSize="1.5rem"
            keepPlaceholderOnInput
          />
        </div>
      </div>
    </PageLayout>
  );
}