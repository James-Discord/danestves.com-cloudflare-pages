// Dependencies
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from 'remix-themes';

// Internals
import { MoonIcon } from './icons/moon-icon';
import { Themed } from './themed';

function ThemeSwitcher() {
  let { t } = useTranslation();
  let [, setTheme] = useTheme();

  return (
    <button
      className="inline-flex p-2 text-white dark:text-[#292929] bg-secondary rounded-full focus:outline-none focus:ring-4 focus:ring-secondary/50"
      onClick={() =>
        setTheme((previousTheme) =>
          previousTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        )
      }
      type="button"
    >
      <MoonIcon className="inline-block w-[21px] h-auto" />

      <span className="sr-only">
        <Themed
          dark={t('header.switcher.theme.dark')}
          light={t('header.switcher.theme.light')}
        />
      </span>
    </button>
  );
}

export { ThemeSwitcher };
