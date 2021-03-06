import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import styles from './index.module.css';

const cx = classNames.bind(styles);

export const PERIODS = [
  {
    hours: 24,
    step: 1,
    name: (
      <FormattedMessage
        id="period-hours"
        defaultMessage="{period}h"
        values={{ period: 24 }}
      />
    ),
  },
  {
    hours: 168,
    step: 7,
    name: (
      <FormattedMessage
        id="period-days"
        defaultMessage="{period}d"
        values={{ period: 7 }}
      />
    ),
  },
  {
    hours: 720,
    step: 30,
    name: (
      <FormattedMessage
        id="period-days"
        defaultMessage="{period}d"
        values={{ period: 30 }}
      />
    ),
  },
];

function PeriodSwitcher({ hours, onChange }) {
  return (
    <div className={cx('container')}>
      {PERIODS.map(period => (
        <button
          type="button"
          key={period.hours}
          className={cx('period', { selected: period.hours === hours })}
          onClick={() => onChange(period)}
        >
          {period.name}
        </button>
      ))}
    </div>
  );
}

PeriodSwitcher.propTypes = {
  hours: PropTypes.number,
  onChange: PropTypes.func,
};

PeriodSwitcher.defaultProps = {
  hours: PERIODS[0].hours,
  onChange: () => {},
};

export default PeriodSwitcher;
