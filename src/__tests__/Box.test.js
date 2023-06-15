import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from '../components/ui/Containers/Box/Box';

test('calls onClick handler when clicked', () => {
  const onClickMock = jest.fn(); // Создание mock-функции для обработчика
  render(<Box onClick={onClickMock} />); // Рендер компонента с передачей onClickMock
  
  const boxElement = screen.getByTestId('box'); // Получение элемента с помощью screen.getByTestId
  boxElement.click();
  expect(onClickMock).toHaveBeenCalledTimes(1); // Вызов mock-функции onClickMock один раз?
});
