import { Plugin, PluginID } from '@/types/plugin';

export const getEndpoint = (plugin: Plugin | null) => {
  if (!plugin) {
    return process.env.NEXT_PUBLIC_COMPLETIONS_URL || 'openai/v1/chat/completions';
  }

  if (plugin.id === PluginID.GOOGLE_SEARCH) {
    return 'api/google';
  }

  return 'api/chat';
};
