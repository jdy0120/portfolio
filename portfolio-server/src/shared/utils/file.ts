import { Request } from "express";

import formidable from "formidable";

export const parseFormData = (
  req: Request
): Promise<{
  field: formidable.Fields;
  files: { files: formidable.File[] };
}> => {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return resolve({
        field: fields,
        files: files as unknown as { files: formidable.File[] },
      });
    });
  });
};
