import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { queryFetch } from "@/config/queryClient";
import { ApiError } from "@/types/client.type";
import { IResponseApiHouse } from "@/types/house.type";

export function GetListHouse(
  options?: UseQueryOptions<IResponseApiHouse[], ApiError>
) {
  return useQuery<IResponseApiHouse[], ApiError>({
    queryKey: ["house"],
    queryFn: async () => {
      return await queryFetch({
        url: "/9d14be61-2ef1-4b2d-9246-3bf36e60687b",
      });
    },
    ...options,
  });
}
