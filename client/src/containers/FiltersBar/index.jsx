import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Button, DatePicker } from 'antd';

import { setVisibilityFilter } from '../../store/actions/filters';

const { Panel } = Collapse;

const style = {
  bar: {
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5
  },
  filters: {
    marginLeft: 5
  }
}

const FiltersBar = ({ setVisibilityFilter }) => {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const onBtnClick = filter => {
    setVisibilityFilter(filter);
  }

  return (
    <div style={style.bar}>
      <Collapse defaultActiveKey={['filters']}>
        <Panel header="Filters" key="filters">
          <div>
            <Button type="primary" onClick={() => onBtnClick('SHOW_ALL_FILTER')} >All</Button>
            <Button style={style.filters} >My Todos</Button>
            <Button style={style.filters} onClick={() => onBtnClick('SHOW_COMPLETED_FILTER')}>Completed</Button>
            <Button style={style.filters} onClick={() => onBtnClick('SHOW_ACTIVE_FILTER')}>In Progress</Button>
            <DatePicker style={style.filters} onChange={onChange} />
          </div>
        </Panel>
      </Collapse>
    </div>
  )
}

export default connect(null, { setVisibilityFilter })(FiltersBar);