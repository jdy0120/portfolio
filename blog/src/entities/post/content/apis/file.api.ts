const BaseUrl = process.env.NEXT_PUBLIC_STORAGE_BASE_URL;

const getContentJsonFile = async (filePath: string | undefined) => {
  if (!filePath) return null;
  const response = await fetch(`${BaseUrl}/${filePath}`);
  const data = await response.json();
  return data;
};

export { getContentJsonFile };
