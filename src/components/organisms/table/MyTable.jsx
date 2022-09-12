import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { Table } from "antd";

const MyTable = (props) => {
  const { tableData, sortOrder, isLoading } = props;

  const columns = [
    {
      title: "Long link",
      dataIndex: "target",
      render: (target, record) => <a href={record.target}>{target}</a>,
      sorter: true,
      width: 400,
      ellipsis: {
        showTitle: false,
      },
    },

    {
      title: "Short link",
      dataIndex: "short",
      render: (short, record) => <a href={record.short}>{short}</a>,
      sorter: true,
      width: 400,
    },
    {
      title: "Count",
      dataIndex: "counter",
      sorter: true,
      width: 100,
    },
  ];

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const getSortOrderParams = (sorted) => {
    const params = {
      ascend: `asc_${sorted.field}`,
      descend: `desc_${sorted.field}`,
    };
    return params[sorted.order];
  };

  const handleTableChange = (newPagination, filters, sorter) => {
    const order = getSortOrderParams(sorter);
    sortOrder(order);
    setPagination(newPagination);
  };
  return (
    <Table
      columns={columns}
      rowKey={(tableData) => tableData.id}
      dataSource={tableData}
      pagination={pagination}
      loading={isLoading}
      onChange={handleTableChange}
    />
  );
};

export default MyTable;
