import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Label from '../components/ui/Label/Label';

describe('Label', () => {
  afterEach(cleanup); // Выполняется после каждого теста для очистки рендера и предотвращения утечек памяти

  test('applies correct size class for size "s"', () => {
    const { container } = render(<Label size="s" />); // Рендер компонента Label с размером "s"
    expect(container.firstChild).toHaveClass('text-sm'); // Проверка дочернего элемента на класс "text-sm"
  });

  test('applies correct size class for size "m"', () => {
    const { container } = render(<Label size="m" />);
    expect(container.firstChild).toHaveClass('text-md');
  });

  test('applies correct size class for size "x"', () => {
    const { container } = render(<Label size="x" />);
    expect(container.firstChild).toHaveClass('text-xl');
  });

  test('applies correct size class for default size', () => {
    const { container } = render(<Label />);
    expect(container.firstChild).toHaveClass('text-xl');
  });
});

