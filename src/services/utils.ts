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
  const headers = new Headers();
  // headers.append('Authorization', `Bearer ${getToken()}`);

  try {
    const response = await fetch(url, { headers });
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
  } catch (error) {
    console.warn(error);
  }
};

const strOrNumArray: string[] | number[] = [0, 1, 2];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isStringArray(array: any[]): array is string[] {
  return array.every((i) => typeof i === 'string');
}

export type RemoveDuplicateSlash<T extends string> = T extends `${infer S1}//${infer S2}` ? RemoveDuplicateSlash<`${S1}/${S2}`> : T;

const test: string[] = strOrNumArray && isStringArray(strOrNumArray) ? strOrNumArray : [];

type TestType = {
  name: string;
  age: number;
};

const person = {
  name: 'asdf',
  age: 12,
} satisfies TestType;

export function getStringWithDecimal(
  value: string,
  afterDecimalLength?: number,
  min = -Infinity,
  max = Infinity,
) {
  const mask = `{/^-\\d*\\.?\\d{0,${afterDecimalLength}}/gi}`;
  const afterDecimalPart = value.split('.')[1];
  const beforeDecimalPart = value.split('.')[0];

  const trimmedByFixedLength = afterDecimalPart.slice(0, afterDecimalLength);

  const result = (mask as unknown as RegExp).exec(`${beforeDecimalPart + trimmedByFixedLength}`);

  return (!Number.isNaN(result) && result)
    ? Math.max(Math.min(+result, max), min)
    : 0;
}

// eslint-disable-next-line max-len
export const paramsSerializer = (request: Record<string, unknown>): string => Object.entries(request)
  .filter(([key, value]) => {
    if (value === false) {
      return !!key;
    }

    return key && value;
  })
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.reduce<string>((acc, el, currentIndex) => {
        if (currentIndex === 0) {
          return `${key}=${el}`;
        }
        return `${acc}&${key}=${el}`;
      }, '');
    }
    return `${key}=${value}`;
  })
  .reduce<string>((acc, el, currentIndex) => {
  if (currentIndex === 0) {
    return el;
  }
  return `${acc}&${el}`;
}, '');

console.log(test);
