import { randomBytes } from "crypto";
import { Request } from "express";

import formidable from "formidable";

const parseFormData = (
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

const filename = (_name: string, extension: string) => {
  const today = Date.now();
  const random = randomBytes(16).toString("hex");

  return `${today}_${random}.${extension}`;
};

export { filename, parseFormData };
