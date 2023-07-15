import { useMemo } from 'react';

import { useTranslation } from 'next-i18next';

import { ErrorMessage } from '@/types/error';

const useErrorService = () => {
  const { t } = useTranslation('chat');

  return {
    getModelsError: useMemo(
      () => (error: any) => {
        return !error
          ? null
          : ({
              title: t('Error fetching models.'),
              code: error.code || 'unknown',
              messageLines: error && error.message
                ? [error.message]
                : [
                    '服务器错误，请稍后再试或反馈网站运营人员（微信公众号：writer1024）',
                  ],
            } as ErrorMessage);
      },
      [t],
    ),
  };
};

export default useErrorService;
