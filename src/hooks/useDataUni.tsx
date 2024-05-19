import { useState, useEffect } from "react";
import axios from "axios";
import { LIMIT_LIST_SCHOOL } from "../constants/config";
import { DataType } from "../interfaces/DataType";
import type { ColumnsType } from "antd/es/table";
export const useDataUni = () => {
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  const getUniversity = async (page: number, limit: number) => {
    setLoading(true); // Устанавливаем состояние загрузки в true
    try {
      const offset = (page - 1) * limit; // Вычисляем смещение для текущей страницы

      const response = await axios.get(`http://universities.hipolabs.com/search?offset=${offset}&limit=${limit}`);

      setDataSource(response.data); // Устанавливаем данные, полученные из ответа сервера, в состояние dataSource
    } catch (error) {
      console.error("Error fetching data:", error); // Обработка ошибок, если запрос не удался
    } finally {
      setLoading(false); // Вне зависимости от результата запроса, устанавливаем состояние загрузки в false
    }
  };

  useEffect(() => {
    // useEffect используется для выполнения запроса данных университетов при изменении значения страницы (page).
    getUniversity(page, LIMIT_LIST_SCHOOL); // Вызываем функцию getUniversity для получения данных университетов с указанной страницы и лимитом элементов.
  }, [page]); // Зависимость [page] гарантирует запуск useEffect при изменении значения переменной page.

  return {
    dataSource,
    columns,
    loading,
    page,
    setPage,
  };
};
