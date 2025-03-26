import { useQuery } from "@tanstack/react-query";
import { getPostItem } from "./postItem.api";

type UseGetPostItemProps = {
  slug: string;
  queryKey: string;
};

const useGetPostItem = ({ slug, queryKey }: UseGetPostItemProps) => {
  return useQuery({ queryKey: [queryKey, slug], queryFn: () => getPostItem(slug) });
};

export { useGetPostItem };
