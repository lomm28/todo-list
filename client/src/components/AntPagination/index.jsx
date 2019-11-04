import React from 'react';
import { Pagination } from 'antd';

const style = {
  pagination: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}

const AntPagination = ({ total, pageSize, onChange }) => {
  return (
    <div style={style.pagination}>
      <Pagination
        onChange={onChange}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
      />
    </div>
  )
}

export default AntPagination;