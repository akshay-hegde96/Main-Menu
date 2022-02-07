import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import MainMenu from '../__mocks__/MainMenu'

configure({ adapter: new Adapter() })

describe('Elements Check', () => {
  const element = shallow(
    <MainMenu
      debug
      blockProp={[
        {
          menuTitle: 'PRODUCTS',
          menuLink: '/products',
          menuid: 1,
          submenu: [
            {
              submenuL1Title: 'Multisport & Triathlon',
              submenuL1TitleLink: '/Multisport-Triathlon',
              submenuL1Content: [
                { name: 'Polar Vantage V2', link: '/Polara' },
                { name: 'Polar Grit X Pro', link: '/Polarb' },
                { name: 'Polar Grit X', link: '/Polarac' },
                { name: 'Polar Vantage M2', link: '/Polarad' },
              ],
            },
          ],
        },
      ]}
    />
  )
  test('should render in "debug" mode', () => {
    const component = shallow(
      <MainMenu
        debug
        blockProp={[
          {
            menuTitle: 'PRODUCTS',
            menuLink: '/products',
            menuid: 1,
            submenu: [
              {
                submenuL1Title: 'Multisport & Triathlon',
                submenuL1TitleLink: '/Multisport-Triathlon',
                submenuL1Content: [
                  { name: 'Polar Vantage V2', link: '/Polara' },
                  { name: 'Polar Grit X Pro', link: '/Polarb' },
                  { name: 'Polar Grit X', link: '/Polarac' },
                  { name: 'Polar Vantage M2', link: '/Polarad' },
                ],
              },
            ],
          },
        ]}
      />
    )
    expect(component).toMatchSnapshot()
  })

  test('Menu Element render', () => {
    const MenuExists = element.find('div div div a div').exists()
    expect(MenuExists).toBe(true)
  })

  test('Menu content check', () => {
    const MenuItem = element.find('div div div a div')
    expect(MenuItem.text()).toBe('PRODUCTS')
  })
})
