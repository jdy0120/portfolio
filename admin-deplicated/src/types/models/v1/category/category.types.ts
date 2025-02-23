export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export type CreateCategory = Omit<
  Category,
  "id" | "createdAt" | "updatedAt" | "deletedAt"
>;
