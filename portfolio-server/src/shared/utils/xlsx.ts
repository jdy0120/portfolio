import xlsx from "xlsx";

import { bufferToStream } from ".";

export const getXlsxStream = <T>(data: T[]) => {
  const workBook = xlsx.utils.book_new();
  const workSheet = xlsx.utils.json_to_sheet<T>(data);

  xlsx.utils.book_append_sheet(workBook, workSheet);

  return bufferToStream(
    xlsx.write(workBook, { bookType: "xlsx", type: "buffer" })
  );
};
