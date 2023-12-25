export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are an AI chatbot, providing chat service. Follow the user's instructions carefully. Respond using markdown.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "0.7");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';

export const CHATBOT_BRAND_NAME =
    process.env.CHATBOT_BRAND_NAME || 'AIYAX';

export const CHATBOT_HOME_PAGE =
    process.env.CHATBOT_HOME_PAGE || 'https://aiyax.com';

export const CHATBOT_USER_MANUAL_PAGE =
    process.env.CHATBOT_USER_MANUAL_PAGE || 'https://aiyax.com/announcement/chatgpt-user-manual/';
