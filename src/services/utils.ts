import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* Функция принимает массив классов,
 * объединяет их с помощью clsx и сопоставляет полученные имена классов с классами Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Функция возвращает строку уникальных классов
 * (отсеивает null, false, undefined, '', лишние пробелы и \n)
 * Шаблонные выражения обязательно следует писать после логического оператора '&&' либо тернарника
 */
export function extractStyles(
  strings: TemplateStringsArray,
  ...exprResults: (string | boolean | undefined)[]
) {
  const rawStyles = strings
    .flatMap((x) => x.split('\n'))
    .flatMap((x) => x.split(' '))
    .map((x) => x.trim())
    .filter(Boolean);
  const result = new Set([...exprResults, ...rawStyles]);

  return Array.from(result).filter(Boolean).join(' ');
}

/** Соединение элементов массива в строку  */
export function joinNonEmpty(arr: unknown[], separator: string = ' '): string {
  return arr.filter(Boolean).join(separator);
}

/** Метод для вывода печатной формы в браузере */
export const formPrint = async (url: string) => {
  const file = `${process.env.VITE_APP_API_URL ?? ''}/api/v1.0${url}`;
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${getToken()}`);

  const response = await fetch(file, { headers });
  if (response.status !== 200) {
    throw response;
  }
  const blob = await response.blob();
  const blobURL = URL.createObjectURL(blob);

  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = blobURL;

  document.body.appendChild(iframe);

  iframe.onload = () => {
    setTimeout(() => {
      iframe.focus();
      iframe.contentWindow?.print();
    }, 1);
  };
};

const strOrNumArray: string[] | number[] = [0, 1, 2];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isStringArray(array: any[]): array is string[] {
  return array.every((i) => typeof i === 'string');
}

const test: string[] = strOrNumArray && isStringArray(strOrNumArray) ? strOrNumArray : [];
