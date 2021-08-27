// Dependencies
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import { useWindowScroll } from 'react-use'

// Internals
import { LanguageSwitcher, Link, LocalImage, ThemeSwitcher } from '@/components'
import { MENU, SOCIAL } from '@/constants'
import { clsx } from '@/utils'
import AssetLogo from 'public/static/favicon.png'

export const Header = (): JSX.Element => {
  const router = useRouter()
  const { y } = useWindowScroll()

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 w-full px-12 transition-all duration-200 z-20',
          y >= 104 ? 'bg-white shadow py-2' : 'py-6'
        )}
      >
        <div className="flex items-center justify-between w-full">
          <Link
            className="inline-block w-8 h-8 focus:outline-none focus:rounded focus:ring-4 focus:ring-secondary focus:ring-opacity-50"
            href="/"
            locale={router.locale}
          >
            <LocalImage
              image={{
                alt: '@danestves',
                placeholder: 'blur',
                src: AssetLogo,
              }}
            />
          </Link>

          <ThemeSwitcher />

          <LanguageSwitcher />
        </div>
      </header>

      {/* Left Sidebar */}
      <aside className="fixed top-0 left-0 z-10 hidden h-full px-12 md:block">
        <ul className="flex flex-col items-center justify-center h-full space-y-4 rotate-180">
          {MENU.map((item) => (
            <li key={nanoid()}>
              <Link
                className="text-[10px] text-[#989898] uppercase font-semibold leading-3 vertical-rl hover:text-primary"
                href={item.href}
                locale={router.locale}
              >
                {item.label[router.locale] || item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Sidebar */}
      <aside className="fixed top-0 right-0 z-10 hidden h-full px-12 md:block">
        <ul className="flex flex-col items-center justify-center h-full space-y-4 rotate-180">
          {SOCIAL.map((item) => (
            <li key={nanoid()}>
              <Link
                className="text-[10px] text-[#989898] uppercase font-semibold leading-3 vertical-rl hover:text-primary"
                href={item.href}
                locale={router.locale}
              >
                {item.label[router.locale] || item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Header
