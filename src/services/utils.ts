import ConvertApi from 'convertapi-js';

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

export async function convertPDFToJPEG(file:File) {
  const convertApi = ConvertApi.auth(process.env.NEXT_PUBLIC_CONVERTER_API_KEY ?? '');
  try {
    const params = convertApi.createParams();
    params.add('File', file);
    const { files } = await convertApi.convert('pdf', 'jpg', params);
    return files;
  } catch (error) {
    console.log(error);
  }
  return undefined;
}
