import useSWR from "swr";

import fetcher from "@WhizWire/libs/fetcher";

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/users/${userId}` : null,
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount >= 0) return;
      },
    }
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
