import Select, {components, SingleValueProps, OptionProps, GroupBase} from 'react-select';
import { IconVip } from '@tabler/icons-react';
import { useContext } from 'react';

import { useTranslation } from 'next-i18next';

import HomeContext from '@/pages/api/home/home.context';

export const ModelSelect = () => {
  const { t } = useTranslation('chat');

  const {
    state: { selectedConversation, models, defaultModelId, lightMode },
    handleUpdateConversation,
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const isLightMode = lightMode === 'light';

  type OptionType = {
    value: string;
    label: string;
    needsVip: boolean;
  }

  const options = models.map((model) => ({
    value: model.id,
    label: model.name,
    needsVip: model.free === false,
  }));

  const CustomOption: React.ComponentType<OptionProps<OptionType>> = (props) => {
    const { data } = props;
    return (
        <components.Option {...props}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            {data.label} {data.needsVip ? <IconVip size={18} color="gold" /> : null}
          </span>
        </components.Option>
    );
  };

    const CustomSingleValue: React.ComponentType<SingleValueProps<OptionType, false, GroupBase<OptionType>>> = (props) => {
        const { data } = props;
        return (
            <components.SingleValue {...props}>
          <span className="bg-transparent" style={{ display: 'flex', alignItems: 'center' }}>
            {data.label} {data.needsVip ? <IconVip size={18} color="gold" /> : null}
          </span>
            </components.SingleValue>
        );
    };

  return (
    <div className="flex flex-col overflow-visible">
      <label className="mb-2 text-left text-neutral-700 dark:text-neutral-400">
        {t('Model')}
      </label>
      <div className="w-full rounded-lg bg-transparent pr-2 text-neutral-900 dark:border-neutral-600 dark:text-white">
          <Select
              isMulti={false}
              className="w-full bg-transparent p-2 dark:text-white"
              placeholder={t('Select a model') || ''}
              value={options.find(option => option.value === (selectedConversation?.model?.id || defaultModelId))}
              onChange={(selectedOption) => {
                  let selectedModelId: string | undefined;
                  if (Array.isArray(selectedOption)) {
                      // 如果selectedOption是MultiValue类型，取出第一个元素的value属性
                      selectedModelId = (selectedOption[0] as { value: string; label: string; needsVip: boolean; })?.value;
                  } else {
                      // 否则，直接取出value属性
                      selectedModelId = (selectedOption as { value: string; label: string; needsVip: boolean; })?.value;
                  }
                  const selectedModel = models.find(model => model.id === selectedModelId);
                  if (selectedModel && selectedConversation) {
                      handleUpdateConversation(selectedConversation, {
                          key: 'model',
                          value: selectedModel,
                      });
                  }
              }}
              options={options}
              components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
              styles={{
                  input: (provided) => ({ ...provided, width: 0 }),
                  control: (styles) => ({ ...styles, backgroundColor: 'transparent', color: isLightMode ? 'black' : 'white' }),
                  singleValue: (styles) => ({ ...styles, color: isLightMode ? 'black' : 'white' }),
                  option: (styles) => ({ ...styles, backgroundColor:  isLightMode ? 'white' : 'rgb(52 53 65 / var(--tw-bg-opacity))', color: isLightMode ? 'black' : 'white' }),
                  menu: (styles) => ({ ...styles, backgroundColor: isLightMode ? 'white' : 'rgb(52 53 65 / var(--tw-bg-opacity))', color: isLightMode ? 'black' : 'white' }),
                  menuList: (styles) => ({ ...styles, backgroundColor: isLightMode ? 'white' : 'rgb(52 53 65 / var(--tw-bg-opacity))', color: isLightMode ? 'black' : 'white' }),
              }}
          />
      </div>
    </div>
  );
};
