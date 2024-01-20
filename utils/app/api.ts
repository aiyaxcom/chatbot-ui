export const getEndpoint = () => {
  return process.env.NEXT_PUBLIC_COMPLETIONS_URL || 'openai/v1/chat/completions';
};
