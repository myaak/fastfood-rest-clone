import React, { useEffect, useState, useMemo, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { menuLinks, footerAboutLinks, footerContactsLinks } from './constants/constants';
import { menuList } from './constants/menuList';
import {
  Navbar, Slider, Welcome, Menubar, MenuListItems,
  FooterNavigation, BottomText, FooterInput
} from './components'

function App() {
  const [language, setLanguage] = useState<string>('RU')
  const [languageChanged, setLanguageChanged] = useState<boolean>(false)
  const [currentCategory, setActiveCategory] = useState<string>(menuLinks[0].title)
  const [menuItems, setMenuItems] = useState(menuList.filter((item) => item.category == currentCategory))
  const [categoryChanged, setCategoryChanged] = useState<boolean>(false);

  const changeLanguage = () => {
    if (language == 'RU') {
      setLanguage('EN')
    } else {
      setLanguage('RU')
    }
  }
  useEffect(() => {
    if (categoryChanged) {
      const newItems = menuList.filter((item) => item.category == currentCategory)
      setMenuItems(newItems)
    }
    setCategoryChanged(false)
  }, [categoryChanged])

  const filterItems = (category: string) => {
    setCategoryChanged(true)
    setActiveCategory(category)
  }

  return (
    <div className="page-wrapper">
      <div className="max-w-[1200px] mx-auto my-0 main-page-wrap">
        <header className="z-[0]">
          <Navbar
            changeLanguage={changeLanguage}
            lang={language}
          />
        </header>
        <article className='md:flex md:flex-col md:items-center z-[0] h-full content'>
          <div className="px-[19px] w-full h-full container z-[0]">
            <Slider />
            <Welcome
              lang={language}
            />
            <Menubar
              categories={menuLinks}
              filterItems={filterItems}
              activeCategory={currentCategory}
            />
            <MenuListItems
              selectedCategory={menuItems}
            />
          </div>
          <div className="w-full px-[19px] mt-[10px] mb-[20px] main-page-text">
            <BottomText
              lang={language}
            />
          </div>
        </article>
        <footer className="pt-[35px] border-t-[1px] border-solid border-[rgba(0,0,0,.09)] w-full min-h-[300px] footer-wrapper">
          <div className="flex flex-wrap footer-content-wrapper">
            <div className="footer-nav flex gap-[100px] w-[595px] px-[19px]">
              <FooterNavigation
                title={`О нас`}
                array={footerAboutLinks}
                className="mr-[100px]"
              />
              <FooterNavigation
                title={`Контакты`}
                array={footerContactsLinks} />
            </div>
            <FooterInput />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App;
