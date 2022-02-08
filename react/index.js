import { useState } from 'react'
import React from 'react'
import styles from './index.css'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'menuTitleContainer',
  'menuTitle',
  'submenuL1Container',
  'submenuL1Title',
  'submenuL1Content',
  'mainContainer',
  'menuContainer',
  'subMenuContainer',
]
const MainMenu = (props) => {
  const handles = useCssHandles(CSS_HANDLES)
  const [subItems, setSubItems] = useState(null)
  console.log({ ...props })

  const menuArr = [...props.children]
  console.log(menuArr)
  const blockPropArr = menuArr.map((mitem) => mitem.props.blockProps)
  console.log(blockPropArr)
  let display
  display =
    blockPropArr &&
    blockPropArr.map((menu, i) => {
      return (
        <div key={i} className={handles.menuTitleContainer}>
          <a href={menu.menuLink}>
            <div
              onMouseOver={() => showSubItems(menu.menuid)}
              className={handles.menuTitle}
            >
              {menu.menuTitle}
            </div>
          </a>
        </div>
      )
    })

  const showSubItems = (menuid) => {
    setSubItems(null)
    const subitemArr = blockPropArr
      .filter((eachele) => eachele.menuid == menuid)
      .map((subitem) => {
        return subitem.submenu.map((each) => {
          return (
            <div
              key={each.submenuL1Title}
              className={handles.submenuL1Container}
            >
              <a href={each.submenuL1TitleLink}>
                <div className={handles.submenuL1Title}>
                  {each.submenuL1Title}
                </div>
              </a>
              {each.submenuL1Content.map((subMenu) => {
                return (
                  <a key={subMenu.name} href={subMenu.link}>
                    <div className={handles.submenuL1Content}>
                      {subMenu.name}
                    </div>
                  </a>
                )
              })}
            </div>
          )
        })
      })

    setSubItems(subitemArr)
  }

  return (
    <div
      onMouseLeave={() => setSubItems(null)}
      className={handles.mainContainer}
    >
      <div className={handles.menuContainer}> {display}</div>
      {subItems && <div className={handles.subMenuContainer}>{subItems}</div>}
    </div>
  )
}

export default MainMenu
