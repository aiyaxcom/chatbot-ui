import { useFetch } from '@/hooks/useFetch';
import {useCallback} from "react";

interface User {
    nickname: string;
    member: boolean;
    avatarUrl: string;
    expireTime: string;
    cookieDomain: string;
}

const useApiService = () => {
    const fetchService = useFetch();

    const getModels = useCallback(
        (signal?: AbortSignal) => {
            return fetchService.get(process.env.NEXT_PUBLIC_MODELS_URL || `/openai/v1/models`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                signal,
            });
        },
        [fetchService],
    );

    const getUser = useCallback(
        (signal?: AbortSignal): Promise<User> => {
            return fetchService.get(process.env.NEXT_PUBLIC_USER_URL || `/users/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                signal,
            });
        },
        [fetchService],
    );

    return {
        getModels,
        getUser,
    };
};

export default useApiService;