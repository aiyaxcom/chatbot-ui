import {
    IconFileExport,
    IconSettings,
    IconVip,
    IconLogout,
    IconBrandWechat, IconUser
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
import {VipDialog} from "@/components/Settings/VipDialog";

export const ChatbarSettings = () => {
  const { t } = useTranslation('sidebar');
  const [isSettingDialogOpen, setIsSettingDialog] = useState<boolean>(false);
  const [isDonateDialogOpen, setIsDonateDialog] = useState<boolean>(false);

  const {
    state: {
      lightMode,
      conversations,
      showVipDialog,
    },
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const {
    handleClearConversations,
    handleImportConversations,
    handleExportData,
  } = useContext(ChatbarContext);

  const cookieDomain = localStorage.getItem('cookieDomain');
  const serverUrl = Cookies.get('serverUrl');

  const setIsVipOpen = (show: boolean) => {
      homeDispatch({ field: 'showVipDialog', value: show });
  }

  return (
    <div className="flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm">
      {conversations.length > 0 ? (
        <ClearConversations onClearConversations={handleClearConversations} />
      ) : null}

      {/*<Import onImport={handleImportConversations} />*/}

      {/*<SidebarButton*/}
      {/*  text={t('Export data')}*/}
      {/*  icon={<IconFileExport size={18} />}*/}
      {/*  onClick={() => handleExportData()}*/}
      {/*/>*/}

        <SidebarButton
            text={t('Membership')}
            icon={<IconVip size={18} color="gold"/>}
            onClick={() => setIsVipOpen(true)}
        >
            <div className="absolute right-0 text-2xs bg-red-500 text-white px-1 py-0.5 rounded-md">
                降价啦!
            </div>
        </SidebarButton>

      <SidebarButton
          text={t('Donate')}
          icon={<IconBrandWechat size={18} color="green"/>}
          onClick={() => setIsDonateDialog(true)}
      />

        <SidebarButton
            text={t('Settings')}
            icon={<IconSettings size={18} />}
            onClick={() => setIsSettingDialog(true)}
        />

        <SidebarButton
            text={t('My Account')}
            icon={<IconUser size={18}/>}
            onClick={ () => window.open(`${serverUrl}/account/`, '_blank')}
        >
            <div className="absolute right-0 text-2xs bg-red-500 text-white px-1 py-0.5 rounded-md">
                可开票!
            </div>
        </SidebarButton>

        <SidebarButton
            text={t('Logout')}
            icon={<IconLogout size={18} />}
            onClick={() => {
                if (cookieDomain) {
                    Cookies.remove('Authorization', { domain: cookieDomain });
                } else {
                    Cookies.remove('Authorization');
                }
                window.location.reload();
            }}
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
            open={showVipDialog}
            onClose={() => {
                setIsVipOpen(false);
            }}
        />

    </div>
  );
};
