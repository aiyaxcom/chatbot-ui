import { useCallback } from 'react';

import { useFetch } from '@/hooks/useFetch';

export interface GetModelsRequestProps {
  key: string;
}

const useApiService = () => {
  const fetchService = useFetch();

  const getModels = useCallback(
    (params: GetModelsRequestProps, signal?: AbortSignal) => {
      let selectedConversation:any = localStorage.getItem('selectedConversation') || {};
      return fetchService.post<GetModelsRequestProps>(process.env.NEXT_PUBLIC_API_MODELS_URL || `/api/models`, {
        body: {
          key: params.key,
          userToken: localStorage.getItem('userToken')
        },
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
      });
    },
    [fetchService],
  );

  return {
    getModels,
  };
};

export default useApiService;
