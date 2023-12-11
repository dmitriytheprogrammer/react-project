import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  id: number;
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  superpowers: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (id) => <a>{id}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    title: 'Superpowers',
    key: 'superpowers',
    dataIndex: 'superpowers',
    render: (_, { superpowers }) => (
      <>
        {superpowers.map((superpower) => {
          let color = superpower.length > 5 ? 'gold' : 'silver';
          if (superpower === 'teleportation') {
            color = 'red';
          }
          return (
            <Tag color={color} key={superpower}>
              {superpower.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  }
];

const data: DataType[] = [
  {
    id: 1,
    key: '1',
    name: 'Влад Корнелюк',
    age: 19,
    address: 'Москва',
    tags: ['nice', 'developer'],
    superpowers: ['nightvision', 'teleportation']
  },
  {
    id: 2,
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    superpowers: ['Telekinesis', 'Invisibility']
  },
  {
    id: 3,
    key: '3',
    name: 'Timur Shorohanov',
    age: 32,
    address: 'Moscow',
    tags: ['programer', 'teacher'],
    superpowers: ['Super Strength', 'Hyperspeed']
  },

  {
    id: 4,
    key: '4',
    name: 'Artem Akimov',
    age: 19,
    address: 'Moscow',
    tags: ['C#-dev', 'father-hr'],
    superpowers: ['Time Manipulation', 'Sense of Humour']
  }
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;
