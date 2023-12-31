@echo off
set OPENAI_API_KEY=no-needed
set OPENAI_API_HOST=http://localhost:8080/openai
set CHATBOT_HOME_PAGE=https://www.google.com
set CHATBOT_BRAND_NAME=AIYAXTEST
set NEXT_PUBLIC_MODELS_URL=http://localhost:8080/openai/v1/models
set NEXT_PUBLIC_USER_URL=http://localhost:8080/users/me
set NEXT_PUBLIC_COMPLETIONS_URL=http://localhost:8080/openai/v1/chat/completions
@REM set NEXT_PUBLIC_DEFAULT_TEMPERATURE=0.7
npm run dev