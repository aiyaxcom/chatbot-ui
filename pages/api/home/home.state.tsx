import { Conversation, Message } from '@/types/chat';
import { ErrorMessage } from '@/types/error';
import { FolderInterface } from '@/types/folder';
import { OpenAIModel, OpenAIModelID } from '@/types/openai';
import { PluginKey } from '@/types/plugin';
import { Prompt } from '@/types/prompt';
import Cookies from 'js-cookie';

export interface HomeInitialState {
  loading: boolean;
  lightMode: 'light' | 'dark';
  messageIsStreaming: boolean;
  modelError: ErrorMessage | null;
  models: OpenAIModel[];
  folders: FolderInterface[];
  conversations: Conversation[];
  selectedConversation: Conversation | undefined;
  currentMessage: Message | undefined;
  prompts: Prompt[];
  temperature: number;
  showChatbar: boolean;
  showPromptbar: boolean;
  showVipDialog: boolean;
  isVip: boolean;
  currentFolder: FolderInterface | undefined;
  messageError: boolean;
  searchTerm: string;
  defaultModelId: OpenAIModelID | undefined;
}

export const initialState: HomeInitialState = {
  loading: false,
  lightMode: 'dark',
  messageIsStreaming: false,
  modelError: null,
  models: [],
  folders: [],
  conversations: [],
  selectedConversation: undefined,
  currentMessage: undefined,
  prompts: [],
  temperature: 1,
  showPromptbar: false,
  showChatbar: true,
  showVipDialog: false,
  isVip: Cookies.get('member') === 'true',
  currentFolder: undefined,
  messageError: false,
  searchTerm: '',
  defaultModelId: undefined,
};
