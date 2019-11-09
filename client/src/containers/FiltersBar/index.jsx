import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Collapse, Button, DatePicker } from 'antd';

import { setVisibilityFilter } from '../../store/actions/filters';
import {
  SHOW_ALL_FILTER,
  SHOW_COMPLETED_FILTER,
  SHOW_ACTIVE_FILTER,
  SHOW_MINE_FILTER,
  SHOW_DATE_FILTER,
} from '../../store/types';

const { Panel } = Collapse;

const style = {
  bar: {
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  filters: {
    marginLeft: 5,
  },
};

const FiltersBar = ({ setVisibilityFilter }) => {
  const onDatePickerChange = (date, dateString) => {
    if (dateString) {
      setVisibilityFilter({ type: SHOW_DATE_FILTER, date: dateString });
    }
  };

  const onBtnClick = filter => {
    setVisibilityFilter({ type: filter });
  };

  return (
    <div style={style.bar}>
      <Collapse defaultActiveKey={['filters']}>
        <Panel header="Filters" key="filters">
          <div>
            <Button type="primary" onClick={() => onBtnClick(SHOW_ALL_FILTER)}>
              All
            </Button>
            <Button
              style={style.filters}
              onClick={() => onBtnClick(SHOW_MINE_FILTER)}
            >
              My Todos
            </Button>
            <Button
              style={style.filters}
              onClick={() => onBtnClick(SHOW_COMPLETED_FILTER)}
            >
              Completed
            </Button>
            <Button
              style={style.filters}
              onClick={() => onBtnClick(SHOW_ACTIVE_FILTER)}
            >
              In Progress
            </Button>
            <DatePicker
              placeholder="filter by date"
              style={style.filters}
              onChange={onDatePickerChange}
            />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

FiltersBar.propTypes = {
  setVisibilityFilter: func.isRequired,
};

export default connect(null, { setVisibilityFilter })(FiltersBar);
