import { Get, Post } from "../../../lib/axios/request";
import {
  Category,
  CreateCategory,
} from "../../../types/models/v1/category/category.types";

export const getCategoryList = async () => {
  try {
    const response = await Get<Category[]>("/v1/categories");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createCategory = async (data: CreateCategory) => {
  try {
    const response = await Post("/v1/categories", data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
