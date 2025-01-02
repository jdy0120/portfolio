import { BlobServiceClient } from "@azure/storage-blob";

const connectAzure = () => {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_STORAGE_CONNECTION_STRING || ""
  );

  const containerClient =
    blobServiceClient.getContainerClient("portfolio");

  return containerClient;
};

export { connectAzure };
