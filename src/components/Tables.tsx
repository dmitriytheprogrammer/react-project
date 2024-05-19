import React from "react";
import { Table, Button, Space } from "antd";
import { useDataUni } from "../hooks/useDataUni";
import { DataType } from "../interfaces/DataType";
import type { ColumnsType } from "antd/es/table";

export const Tables = () => {
  const { dataSource, loading, page, setPage } = useDataUni();
  const columns: ColumnsType<DataType> = [
    {
      title: "Страна",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Название школы",
      dataIndex: "name",
      key: "name",
    },
  ];

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        loading={loading}
        bordered
        size="middle"
        rowKey={(record) => record.name} // Добавим уникальный ключ для каждой строки таблицы
      />
      <Space>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1} type="primary">
          Назад
        </Button>
        <Button onClick={() => setPage(page + 1)} type="primary">
          Вперед
        </Button>
        <span>Текущая страница: {page}</span>
      </Space>
    </>
  );
};
