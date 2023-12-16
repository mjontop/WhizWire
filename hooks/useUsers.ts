import useSWR from "swr";

import fetcher from "@WhizWire/libs/fetcher";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/users", fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (retryCount >= 0) return;
    },
  });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
