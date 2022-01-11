# Main-Menu

The Main-Menu app provides block responsible for displaying menu and submenu of fullwidth layout.<br>

  Below image shows an example of the **`main-menu`** block integrated in store theme header.jsonc file, displaying menu and submenu of fullwidth layout.
  
  ![image](https://echidna.vteximg.com.br/arquivos/Main-Menu.PNG)
  
  ## Usage

1. Add the `main-menu` app to your store theme's dependencies in the manifest.json,<br>

   For example:<br>
        
```JSON
    "dependencies": 
    {
     "echidna.main-menu": "0.x"
    }
```  
  2. Add the `main-menu` block to the header.jsonc file, declare the **`main-menu-item`** block as children to the main-menu block and configure the props in the `main-menu-item` block(refer the main-menu-item props table below) to display the menu and submenu as per your store's scenario,<br>
  
     For example:<br>
     
 ```JSONC
     {
     //header blocks ...
     
    "children": [
      "logo#desktop",
      "flex-layout.col#spacer",
      "main-menu#Demo",
      "flex-layout.col#spacer",
      "disclosure-layout#header-search",
      "minicart.v2"
    ]
  },
  "main-menu#Demo": {
    "children": [
      "main-menu-item#PRODUCTS",
      "main-menu-item#INSPIRATION",
      "main-menu-item#SCIENCE",
      "main-menu-item#SUPPORT",
      "main-menu-item#BLOG"
    ],
    "props": {
      "blockClass": "main-menu"
    }
  },
  "main-menu-item#PRODUCTS": {
    "props": {
      "menuTitle": "PRODUCTS",
      "menuLink": "/products",
      "menuid": 1,
      "submenu": [
        {
          "submenuL1Title": "Running",
          "submenuL1TitleLink": "/running",
          "submenuL1Content": [
            { "name": "Polar Vantage V2", "link": "/running" },
            { "name": "Polar Grit X Pro", "link": "/running" },
            { "name": "Polar Grit X", "link": "/running" },
            { "name": "Polar Vantage M2", "link": "/running" }
          ]
        },
        //rest of the code...
       ] 
   ```
     
   
<details ><summary>View Full Code</summary>
<p>

```JSON
{
  "header": {
    "blocks": ["header-layout.desktop", "header-layout.mobile"]
  },
  "header.full": {
    "blocks": ["header-layout.desktop", "header-layout.mobile"]
  },
  "header-layout.desktop": {
    "children": ["flex-layout.row#2-desktop", "sticky-layout#2-desktop"]
  },
  "sticky-layout#2-desktop": {
    "props": {
      "blockClass": "sticky-header"
    },
    "children": ["flex-layout.row#4-desktop"]
  },
  "flex-layout.row#4-desktop": {
    "props": {
      "blockClass": "nissan-main-menu-static",
      "horizontalAlign": "center",
      "verticalAlign": "center",
      "preventHorizontalStretch": true,
      "preventVerticalStretch": true,
      "fullWidth": true
    },
    "children": [
      "logo#desktop",
      "flex-layout.col#spacer",
      "main-menu#Demo",
      "flex-layout.col#spacer",
      "disclosure-layout#header-search",
      "minicart.v2"
    ]
  },
  "main-menu#Demo": {
    "children": [
      "main-menu-item#PRODUCTS",
      "main-menu-item#INSPIRATION",
      "main-menu-item#SCIENCE",
      "main-menu-item#SUPPORT",
      "main-menu-item#BLOG"
    ],
    "props": {
      "blockClass": "main-menu"
    }
  },
  "main-menu-item#PRODUCTS": {
    "props": {
      "menuTitle": "PRODUCTS",
      "menuLink": "/products",
      "menuid": 1,
      "submenu": [
        {
          "submenuL1Title": "Running",
          "submenuL1TitleLink": "/running",
          "submenuL1Content": [
            { "name": "Polar Vantage V2", "link": "/running" },
            { "name": "Polar Grit X Pro", "link": "/running" },
            { "name": "Polar Grit X", "link": "/running" },
            { "name": "Polar Vantage M2", "link": "/running" }
          ]
        },
        {
          "submenuL1Title": "Multisport & Triathlon",
          "submenuL1TitleLink": "/multisport-triathlon",
          "submenuL1Content": [
            { "name": "Polar Vantage V2", "link": "/multisport" },
            { "name": "Polar Grit X Pro", "link": "/multisport" },
            { "name": "Polar Grit X", "link": "/multisport" },
            { "name": "Polar Vantage M2", "link": "/multisport" }
          ]
        },
        {
          "submenuL1Title": "Cycling",
          "submenuL1TitleLink": "/Multisport-Triathlon",
          "submenuL1Content": [
            { "name": "Polar Vantage V2", "link": "/Polara" },
            { "name": "Polar Grit X Pro", "link": "/Polarb" },
            { "name": "Polar Grit X", "link": "/Polarac" },
            { "name": "Polar Vantage M2", "link": "/Polarad" }
          ]
        }
      ]
    }
  },

  "main-menu-item#INSPIRATION": {
    "props": {
      "menuTitle": "INSPIRATION",
      "menuLink": "/inspiration",
      "menuid": 2,
      "submenu": [
        {
          "submenuL1Title": "Running",
          "submenuL1TitleLink": "/running",
          "submenuL1Content": [
            { "name": "Polar Vantage V2", "link": "/running" },
            { "name": "Polar Grit X Pro", "link": "/running" },
            { "name": "Polar Grit X", "link": "/running" },
            { "name": "Polar Vantage M2", "link": "/running" }
          ]
        },
        {
          "submenuL1Title": "Multisport & Triathlon",
          "submenuL1TitleLink": "/multisport-triathlon",
          "submenuL1Content": [
            { "name": "Polar Vantage V2", "link": "/multisport" },
            { "name": "Polar Grit X Pro", "link": "/multisport" },
            { "name": "Polar Grit X", "link": "/multisport" },
            { "name": "Polar Vantage M2", "link": "/multisport" }
          ]
        },
        {
          "submenuL1Title": "Yoga",
          "submenuL1TitleLink": "/yoga",
          "submenuL1Content": [
            { "name": "Polar Vantage V2", "link": "/yoga" },
            { "name": "Polar Grit X Pro", "link": "/yoga" },
            { "name": "Polar Grit X", "link": "/yoga" },
            { "name": "Polar Vantage M2", "link": "/yoga" }
          ]
        },

        {
          "submenuL1Title": "Multisport & Triathlon",
          "submenuL1TitleLink": "/multisport-triathlon",
          "submenuL1Content": [
            { "name": "Polar Vantage V2", "link": "/multisport" },
            { "name": "Polar Grit X Pro", "link": "/multisport" },
            { "name": "Polar Grit X", "link": "/multisport" },
            { "name": "Polar Vantage M2", "link": "/multisport" }
          ]
        },
        {
          "submenuL1Title": "Cycling",
          "submenuL1TitleLink": "/cycling",
          "submenuL1Content": [
            { "name": "Polar Vantage V2", "link": "/cycling" },
            { "name": "Polar Grit X Pro", "link": "/cycling" },
            { "name": "Polar Grit X", "link": "/cycling" },
            { "name": "Polar Vantage M2", "link": "/cycling" }
          ]
        }
      ]
    }
  },
  "main-menu-item#SCIENCE": {
    "props": {
      "menuTitle": "SCIENCE",
      "menuLink": "science",
      "menuid": 3
    }
  },
  "main-menu-item#SUPPORT": {
    "props": {
      "menuTitle": "SUPPORT",
      "menuLink": "support",
      "menuid": 4
    }
  },
  "main-menu-item#BLOG": {
    "props": {
      "menuTitle": "BLOG",
      "menuLink": "blog",
      "menuid": 5
    }
  }
}

```

</p>
</details> 


 ###  main-menu-item props:
  
| Prop name | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `menuTitle`  | `string` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) Title of the menu to be displayed.           | `undefined or ""`|              |
| `menuLink`  | `string` | Redirection link when the respective menu title is clicked.| `undefined or ""`
| `menuid`  | `integer`or`string` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) **Unique** id of the menu title.| `undefined`|
| `submenu`  | `array` | Array of objects containing submenu props.| `undefined`|

#### submenu props:

| Prop name | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `submenuL1Title`  | `string` |Title of the submenu to be displayed.           | `undefined or ""`              |
| `submenuL1TitleLink`  | `string` | Redirection link when the respective submenu title is clicked.| `undefined or ""`|
| `submenuL1Content`  | `array` | Array of objects containing submenu level 2 props.| `undefined`|

#### submenuL1Content props:

| Prop name | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `name`  | `string` |Title of the submenu level 2 to be displayed.           | `undefined or ""`              |
| `link`  | `string` | Redirection link when the respective Submenu level 2 title is clicked.| `undefined or ""`|


## Customization

Use the below mentioned CSS handles to customize the app according to your store's scenario, for further information on customization using CSS handles, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- |
| `menuTitleContainer` |
| `menuTitle` |
| `submenuL1Container` |
| `submenuL1Title` |
| `submenuL1Content` |
| `mainContainer` |
| `menuContainer` |
| `subMenuContainer` |


## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/reena-p"><img src="https://avatars1.githubusercontent.com/u/42587916?v=4" width="100px;" alt=""/><br /><sub><b>Reena Panwar</b></sub></a><br /><a href="https://github.com/Ashwathnarayanar-tech/Main-Menu/commits?author=reena-p" title="Code">💻</a></td>    
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->



