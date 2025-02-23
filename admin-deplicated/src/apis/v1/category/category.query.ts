import { useQuery, useMutation } from "@tanstack/react-query";
import { createCategory, getCategoryList } from "./category.api";
import { CreateCategory } from "../../../types/models/v1/category/category.types";

export const useCategoryList = () => {
  return useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getCategoryList(),
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: async (data: CreateCategory) => {
      const response = await createCategory(data);
      return response;
    },
  });
};
