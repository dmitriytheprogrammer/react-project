import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { IMyForm } from "../interfaces/IMyForm";
import styled from "styled-components";

export const Forms = () => {
  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: { errors, isValid }, // errors - список ошибок валидации для всех полей формы
    reset, // метод для очистки полей формы
  } = useForm<IMyForm>({
    mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
  });

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    // здесь мы передаём новый массив, который содержит все старые элементы и новый
    // ...prev - мы получаем все элементы текущего стэйте (с помощью spread оператора)
    setTasks((prev) => [...prev, data]);
    reset();
  };

  const [tasks, setTasks] = useState<IMyForm[]>([]);

  return (
    <>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 10,
              message: "Нужно больше символов",
            },
          })}
        />

        <div>{errors.name?.message}</div>
        <input
          {...register("age", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 2,
              message: "Нужно больше символов",
            },
          })}
        />
        <div>{errors.age?.message}</div>

        <input
          {...register("country", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
        />

        <div>{errors.name?.message}</div>
        <button disabled={!isValid} type="submit">
          Сохранить
        </button>
      </form>

      {tasks.map((task) => (
        <p>
          {task.name} - {task.age} - {task.country}
        </p>
      ))}
    </>
  );
};
