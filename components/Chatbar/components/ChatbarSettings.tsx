import {
    IconFileExport,
    IconSettings,
    IconVip, IconVipOff,
    IconNotebook,
    IconPigMoney
} from '@tabler/icons-react';
import { useContext, useState } from 'react';

import Cookies from 'js-cookie';

import { useTranslation } from 'next-i18next';

import HomeContext from '@/pages/api/home/home.context';

import { SettingDialog } from '@/components/Settings/SettingDialog';
import { DonateDialog } from '@/components/Settings/DonateDialog';

import { Import } from '../../Settings/Import';
import { SidebarButton } from '../../Sidebar/SidebarButton';
import ChatbarContext from '../Chatbar.context';
import { ClearConversations } from './ClearConversations';
import {CHATBOT_HOME_PAGE, CHATBOT_USER_MANUAL_PAGE} from "@/utils/app/const";
import {VipDialog} from "@/components/Settings/VipDialog";

export const ChatbarSettings = () => {
  const { t } = useTranslation('sidebar');
  const [isSettingDialogOpen, setIsSettingDialog] = useState<boolean>(false);
  const [isDonateDialogOpen, setIsDonateDialog] = useState<boolean>(false);
    const [isVipOpen, setIsVipOpen] = useState<boolean>(false);

  const {
    state: {
      lightMode,
      conversations,
    },
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const {
    handleClearConversations,
    handleImportConversations,
    handleExportData,
    handleApiKeyChange,
  } = useContext(ChatbarContext);

  const nickname = Cookies.get('nickname') || '匿名用户';
  const member = Cookies.get('member') === 'true';

  return (
    <div className="flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm">
      {conversations.length > 0 ? (
        <ClearConversations onClearConversations={handleClearConversations} />
      ) : null}

      <Import onImport={handleImportConversations} />

      <SidebarButton
        text={t('Export data')}
        icon={<IconFileExport size={18} />}
        onClick={() => handleExportData()}
      />

      <SidebarButton
          text={t('User manual')}
          icon={<IconNotebook size={18}/>}
          onClick={ () => window.open(CHATBOT_USER_MANUAL_PAGE, '_blank')}
      />

        <SidebarButton
            text={t('Membership')}
            icon={<IconVip size={18} color="gold"/>}
            onClick={() => setIsVipOpen(true)}
        />

      <SidebarButton
        text={t('Settings')}
        icon={<IconSettings size={18} />}
        onClick={() => setIsSettingDialog(true)}
      />

      <SidebarButton
          text={t('Donate')}
          icon={<IconPigMoney size={18} color="green"/>}
          onClick={() => setIsDonateDialog(true)}
      />

      <SettingDialog
          open={isSettingDialogOpen}
          onClose={() => {
              setIsSettingDialog(false);
          }}
      />

      <DonateDialog
            open={isDonateDialogOpen}
            onClose={() => {
                setIsDonateDialog(false);
            }}
      />

        <VipDialog
            open={isVipOpen}
            onClose={() => {
                setIsVipOpen(false);
            }}
        />

    </div>
  );
};
