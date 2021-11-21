// Dependencies
import dynamic from 'next/dynamic'

export const ContentCard = dynamic(() => import('./ContentCard'))
export const Flag = dynamic(() => import('./Flag'))
export const GeneralObserver = dynamic(() => import('./GeneralObserver'))
export const LanguageSwitcher = dynamic(() => import('./LanguageSwitcher'))
export const Layout = dynamic(() => import('./Layout/Layout'))
export const Search = dynamic(() => import('./Search/Search'))
export const ThemeSwitcher = dynamic(() => import('./ThemeSwitcher'))
export const Views = dynamic(() => import('./Views'))

export * from './Link'
export * from './Logo'
export * from './Seo'
