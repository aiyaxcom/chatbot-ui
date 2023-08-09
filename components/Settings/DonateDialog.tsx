import { FC } from 'react';
import { useTranslation } from 'next-i18next';

interface Props {
    open: boolean;
    onClose: () => void;
}

export const DonateDialog: FC<Props> = ({ open, onClose }) => {
    const { t } = useTranslation('settings');

    // Render nothing if the dialog is not open.
    if (!open) {
        return <></>;
    }

    // Render the dialog.
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="fixed inset-0 z-10 overflow-hidden">
                <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
                    <div className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true" />

                    <div className="inline-block max-h-[650px] transform rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[650px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
                        <div className="text-lg pb-4 font-bold text-black dark:text-neutral-200">
                            {t('Donate')}
                        </div>

                        <div className="mb-6">
                            <p>{t('AIYAX is committed to providing free GPT-3.5 services in the long term. The costs for API calls have been covered independently. Donations are appreciated to support the operators.')}</p>
                            <br/>
                            <p>{t('Scan the QR code below using Wechat to make a donation:')}</p>
                        </div>

                        <img
                            src="wechat_pay_qr_code_min.jpg"
                            alt="Wechat Pay QR Code"
                            className="m-auto"
                            width="300"
                            height="300"
                        />

                        <button
                            type="button"
                            className="w-full px-4 py-2 mt-6 border rounded-lg shadow border-neutral-500 text-neutral-900 hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
                            onClick={onClose}
                        >
                            {t('Close')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};