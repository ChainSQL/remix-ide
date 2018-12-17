// var csjs = require('csjs-inject')

module.exports = styleGuide

function styleGuide () {
  /* --------------------------------------------------------------------------

                              CSS PROPERTIES

  -------------------------------------------------------------------------- */
  var cssProperties = {
    /* ------------------------------------------------------
                              COLORS
    ------------------------------------------------------ */
    colors: {
      // BASIC COLORS (B&W and transparent)
      transparent: 'transparent',
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
      opacityBlack: 'hsla(0, 0%, 0%, .4)',

      // BLUE
      blue: 'hsla(229, 75%, 87%, 1)',
      lightBlue: 'hsla(229, 75%, 87%, .5)',
      backgroundBlue: 'hsla(229, 100%, 97%, 1)',
      blueLightTrans: 'hsla(202, 91%, 75%, .4)',
      brightBlue: 'hsla(233, 91%, 58%, 1)',
      // GREY
      grey: 'hsla(0, 0%, 40%, 1)',
      lightGrey: 'hsla(0, 0%, 40%, .5)',
      veryLightGrey: 'hsla(0, 0%, 40%, .2)',
      // RED
      strongRed: 'hsla(0, 100%, 71%, 1)',
      red: 'hsla(0, 82%, 82%, 1)',
      lightRed: 'hsla(0, 82%, 82%, .5)',
      // GREEN
      green: 'hsla(141, 75%, 84%, 1)',
      lightGreen: 'hsla(141, 75%, 84%, .5)',
      greenZing: 'hsla(148, 79%, 47%, 1)',
      // PINK
      pink: 'hsla(300, 69%, 76%, 1)',
      lightPink: 'hsla(300, 69%, 76%, .5)',
      // ORANGE
      orange: 'hsla(44, 100%, 50%, 1)',
      lightOrange: 'hsla(44, 100%, 50%, .5)',
      // VIOLET
      violet: 'hsla(240, 64%, 68%, 1)',
      lightViolet: 'hsla(240, 64%, 68%, .5)'
    },

    /* ------------------------------------------------------
                              FONTS
    ------------------------------------------------------ */
    fonts: {
      font: '14px/1.5 Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
    },

    /* ------------------------------------------------------
                                  BORDERS
    ------------------------------------------------------ */
    borders: {
      primary_borderRadius: '3px',
      secondary_borderRadius: '5px'
    }
  }

  /* --------------------------------------------------------------------------

                                APP PROPERTIES

  -------------------------------------------------------------------------- */

  var appProperties = {

    /* ------------------------------------------------------
                          ACE THEME
    ------------------------------------------------------ */

    aceTheme: '',

    /* ------------------------------------------------------
                          BACKGROUND COLORS
    ------------------------------------------------------ */
    primary_BackgroundColor: cssProperties.colors.white,
    secondary_BackgroundColor: cssProperties.colors.backgroundBlue,
    tertiary_BackgroundColor: cssProperties.colors.backgroundBlue,
    quaternary_BackgroundColor: cssProperties.colors.backgroundBlue,
    fifth_BackgroundColor: cssProperties.colors.backgroundBlue,
    seventh_BackgroundColor: cssProperties.colors.veryLightGrey,
    dark_BackgroundColor: cssProperties.colors.black,
    light_BackgroundColor: cssProperties.colors.white,
    debuggingMode_BackgroundColor: cssProperties.colors.lightViolet,
    highlight_BackgroundColor: cssProperties.colors.veryLightGrey,
    /* ------------------------------------------------------
                              RESIZING
    ******************************************************** */
    ghostBar: cssProperties.colors.blueLightTrans,
    draggingBar: cssProperties.colors.blueGreyEve,

    /* ------------------------------------------------------
                            TEXT COLORS
    ******************************************************** */
    mainText_Color: cssProperties.colors.black,
    supportText_Color: cssProperties.colors.grey,

    sub_supportText_Color: cssProperties.colors.black,
    specialText_Color: cssProperties.colors.greenZing,
    brightText_Color: cssProperties.colors.brightBlue,
    oppositeText_Color: cssProperties.colors.black,
    additionalText_Color: cssProperties.colors.veryLightGrey,

    errorText_Color: cssProperties.colors.strongRed,
    warningText_Color: cssProperties.colors.orange,
    infoText_Color: cssProperties.colors.violet,
    greyedText_color: cssProperties.colors.veryLightGrey,
    /* ------------------------------------------------------
                              ICONS
    ******************************************************** */
    icon_Color: cssProperties.colors.black,
    icon_AltColor: cssProperties.colors.white,
    icon_HoverColor: cssProperties.colors.orange,
    icon_ConstantColor: cssProperties.colors.black,

    /* ------------------------------------------------------
                            MESSAGES
    ******************************************************** */
    // Success
    success_TextColor: cssProperties.colors.black,
    success_BackgroundColor: cssProperties.colors.lightGreen,
    success_BorderColor: cssProperties.colors.green,

    // Danger
    danger_TextColor: cssProperties.colors.black,
    danger_BackgroundColor: cssProperties.colors.lightRed,
    danger_BorderColor: cssProperties.colors.red,

    // Warning
    warning_TextColor: cssProperties.colors.black,
    warning_BackgroundColor: cssProperties.colors.lightOrange,
    warning_BorderColor: cssProperties.colors.orange,

    // Tooltip
    tooltip_Color: cssProperties.colors.white,
    tooltip_BackgroundColor: cssProperties.colors.grey,
    tooltip_BorderColor: cssProperties.colors.grey,

    /* ------------------------------------------------------
                          DROPDOWN
    ******************************************************** */
    dropdown_TextColor: cssProperties.colors.black,
    dropdown_BackgroundColor: cssProperties.colors.white,
    dropdown_SecondaryBackgroundColor: cssProperties.colors.white,
    dropdown_BorderColor: cssProperties.colors.veryLightGrey,

    /* ------------------------------------------------------
                            INPUT
    ******************************************************** */
    input_TextColor: cssProperties.colors.black,
    input_BackgroundColor: cssProperties.colors.white,
    input_BorderColor: cssProperties.colors.veryLightGrey,

    /* ------------------------------------------------------
                      SOLID BORDER BOX
    ******************************************************** */
    solidBorderBox_TextColor: cssProperties.colors.black,
    solidBorderBox_BackgroundColor: cssProperties.colors.white,
    solidBorderBox_BorderColor: cssProperties.colors.veryLightGrey,

    /* ------------------------------------------------------
                      SOLID BOX
    ******************************************************** */
    solidBox_TextColor: cssProperties.colors.black,
    solidBox_BackgroundColor: cssProperties.colors.white,

    /* ------------------------------------------------------
                          BUTTONS
    ******************************************************** */

    /* .................
          PRIMARY
    .................. */
    primaryButton_TextColor: cssProperties.colors.black,
    primaryButton_BackgroundColor: cssProperties.colors.lightBlue,
    primaryButton_BorderColor: cssProperties.colors.lightBlue,

    /* .................
          SECONDARY
    .................. */
    secondaryButton_TextColor: cssProperties.colors.black,
    secondaryButton_BackgroundColor: cssProperties.colors.veryLightGrey,
    secondaryButton_BorderColor: cssProperties.colors.veryLightGrey,

    /* .................
          Teriary
    .................. */
    teriaryButton_TextColor: cssProperties.colors.black,
    teriaryButton_BackgroundColor: cssProperties.colors.lightGrey,
    teriaryButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................

    /* .................
          Quaternary
    .................. */
    quaternaryButton_TextColor: cssProperties.colors.black,
    quaternaryButton_BackgroundColor: cssProperties.colors.white,
    quaternaryButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................

    /* .................
          Fifth
    .................. */
    fifthButton_TextColor: cssProperties.colors.black,
    fifthButton_BackgroundColor: cssProperties.colors.blueFairyDust,
    fifthButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................

    /* .................
          Sixth
    .................. */
    sixthButton_TextColor: cssProperties.colors.black,
    sixthButton_BackgroundColor: cssProperties.colors.greenZing,
    sixthButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................

          SUCCESS
    .................. */
    successButton_TextColor: cssProperties.colors.white,
    successButton_BackgroundColor: cssProperties.colors.green,
    successButton_BorderColor: cssProperties.colors.green,

    /* .................
          DANGER
    .................. */
    dangerButton_TextColor: cssProperties.colors.white,
    dangerButton_BackgroundColor: cssProperties.colors.red,
    dangerButton_BorderColor: cssProperties.colors.red,

    /* .................
          WARNING
    .................. */
    warningButton_TextColor: cssProperties.colors.white,
    warningButton_BackgroundColor: cssProperties.colors.lightOrange,
    warningButton_BorderColor: cssProperties.colors.lightOrange,

    /* .................
          INFO
    .................. */
    infoButton_TextColor: cssProperties.colors.black,
    infoButton_BackgroundColor: cssProperties.colors.lightPink,
    infoButton_BorderColor: cssProperties.colors.veryLightGrey,

    /* .................
          SOLIDITY
    .................. */

    // CALL
    callButton_TextColor: cssProperties.colors.black,
    callButton_BackgroundColor: cssProperties.colors.lightBlue,
    callButton_BorderColor: cssProperties.colors.lightBlue,

    // TRANSACTION
    transactButton_TextColor: cssProperties.colors.black,
    transactButton_BackgroundColor: cssProperties.colors.lightRed,
    transactButton_BorderColor: cssProperties.colors.lightRed,

    // CONSTANT
    constantButton_TextColor: cssProperties.colors.black,
    constantButton_BackgroundColor: cssProperties.colors.lightBlue,
    constantButton_BorderColor: cssProperties.colors.lightBlue,

    // PAYABLE TRANSACTION
    transactPayableButton_TextColor: cssProperties.colors.black,
    transactPayableButton_BackgroundColor: cssProperties.colors.red,
    transactPayableButton_BorderColor: cssProperties.colors.red,

    /* ------------------------------------------------------
                            UI ELEMENTS
    ******************************************************** */

    uiElements: {
      solidBorderBox: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        border                : 1px solid ${opts.BorderColor};
        color                 : ${opts.Color};
        border-radius         : ${cssProperties.borders.primary_borderRadius};
        font-size             : 12px;
        padding               : 10px 15px;
        line-height           : 20px;
        overflow              : hidden;
        word-break            : break-word;
        width                 : 100%;
      `,

      solidBox: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        color                 : ${opts.Color};
        font-size             : 12px;
        padding               : 10px 15px;
        line-height           : 20px;
        overflow              : hidden;
        word-break            : break-word;
        width                 : 100%;
      `,

      dottedBorderBox: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        border                : .2em dotted ${opts.BorderColor};
        color                 : ${opts.Color};
        border-radius         : ${cssProperties.borders.secondary_borderRadius};
        line-height           : 20px;
        padding               : 8px 15px;
        margin-bottom         : 1em;
        overflow              : hidden;
        word-break            : break-word;
      `,

      inputField: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        border                : 1px solid ${opts.BorderColor};
        color                 : ${opts.Color};
        border-radius         : ${cssProperties.borders.secondary_borderRadius};
        height                : 25px;
        width                 : 250px;
        padding               : 0 8px;
        overflow              : hidden;
        word-break            : normal;
      `,

      dropdown: (opts = {}) => `
        background-color      : ${opts.BackgroundColor};
        border                : 1px solid ${opts.BorderColor};
        color                 : ${opts.Color};
        font-size               : 12px;
        font-weight             : bold;
        padding                 : 0 8px;
        text-decoration         : none;
        cursor                  : pointer;
        border-radius           : 3px;
        height                  : 25px;
        width                   : 100%;
        text-align              : center;
        overflow                : hidden;
        word-break              : normal;
      `,

      button: (opts = {}) => `
      margin                  : 1px;
      background-color        : ${opts.BackgroundColor};
      border                  : .3px solid ${opts.BorderColor};
      color                   : ${opts.Color};
      display                 : flex;
      align-items             : center;
      justify-content         : center;
      border-radius           : 3px;
      cursor                  : pointer;
      min-height              : 25px;
      max-height              : 25px;
      width                   : 70px;
      min-width               : 70px;
      font-size               : 12px;
      overflow                : hidden;
      word-break              : normal;
      `
    }
  }

  /* --------------------------------------------------------------------------

                            REMIX PROPERTIES

  -------------------------------------------------------------------------- */

  var remixProperties = {
    /* ------------------------------------------------------
                            REMIX GENERAL
    /* ------------------------------------------------------ */
    remix: {
      modalDialog_BackgroundColor_Primary: appProperties.primary_BackgroundColor,
      modalDialog_text_Primary: appProperties.mainText_Color,
      modalDialog_text_Secondary: appProperties.supportText_Color,
      modalDialog_text_Link: appProperties.brightText_Color,
      modalDialog_text_Em: appProperties.specialText_Color,
      modalDialog_Header_Footer_BackgroundColor: appProperties.secondary_BackgroundColor,
      modalDialog_Header_Footer_Color: appProperties.mainText_Color,
      modalDialog_BoxDottedBorder_BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
      modalDialog_BoxDottedBorder_BorderColor: appProperties.solidBorderBox_BorderColor,
      modalDialog_BoxDottedBorder_Color: appProperties.solidBorderBox_TextColor,

      tooltip_CopyToClipboard_BackgroundColor: appProperties.tooltip_BackgroundColor,
      tooltip_CopyToClipboard_Color: appProperties.tooltip_Color,

      icon_Color_CopyToClipboard: appProperties.icon_Color,
      icon_HoverColor_CopyToClipboard: appProperties.icon_HoverColor,

      solidBox: appProperties.uiElements.solidBorderBox({
        BackgroundColor: appProperties.solidBox_BackgroundColor,
        Color: appProperties.solidBox_TextColor
      })
    },

    /* ------------------------------------------------------
                    LEFT PANEL (FILE PANEL)
    /* ------------------------------------------------------ */
    leftPanel: {
      backgroundColor_Panel: appProperties.primary_BackgroundColor,
      backgroundColor_FileExplorer: appProperties.tertiary_BackgroundColor,

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_Teriary: appProperties.sub_supportText_Color,

      bar_Ghost: appProperties.ghostBar,
      bar_Dragging: appProperties.draggingBar,

      icon_Color_Menu: appProperties.icon_Color,
      icon_HoverColor_Menu: appProperties.icon_HoverColor,

      icon_Color_TogglePanel: appProperties.icon_Color,
      icon_HoverColor_TogglePanel: appProperties.icon_HoverColor

    },

    /* ------------------------------------------------------
                              EDITOR
    /* ------------------------------------------------------ */
    editor: {
      backgroundColor_Panel: appProperties.primary_BackgroundColor,
      backgroundColor_Editor: appProperties.light_BackgroundColor,
      backgroundColor_Tabs_Highlights: appProperties.secondary_BackgroundColor,
      backgroundColor_Editor_Context_Highlights: appProperties.secondary_BackgroundColor,
      backgroundColor_Editor_Context_Error_Highlights: appProperties.error_BackgroundColor,
      backgroundColor_DebuggerMode: appProperties.debuggingMode_BackgroundColor,

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_Teriary: appProperties.sub_supportText_Color,
      text_Editor: '',

      icon_Color_Editor: appProperties.icon_Color,
      icon_HoverColor_Editor: appProperties.icon_HoverColor

    },

    /* ------------------------------------------------------
                          TERMINAL
    /* ------------------------------------------------------ */
    terminal: {
      backgroundColor_Menu: appProperties.secondary_BackgroundColor,
      backgroundColor_Terminal: appProperties.seventh_BackgroundColor,
      backgroundColor_TerminalCLI: appProperties.seventh_BackgroundColor,
      backgroundImage_Terminal: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNzg3LjUgNDcxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3ODcuNSA0NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNDN0M3Qzc7fQ0KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0MntmaWxsOnVybCgjU1ZHSURfMl8pO30NCgkuc3Qze2ZpbGw6dXJsKCNTVkdJRF8zXyk7fQ0KCS5zdDR7ZmlsbDojQjlCOUI5O30NCjwvc3R5bGU+DQo8cmVjdCB5PSIwIiBjbGFzcz0ic3QwIiB3aWR0aD0iNzg3LjUiIGhlaWdodD0iNDcxIi8+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM3MC41NzA3IiB5MT0iMTk2LjcyMjEiIHgyPSI0OTQuNjQ2OCIgeTI9IjM3Mi4xNzM1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNDcxLjg4OTgpIj4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojOUU5RTlFIi8+DQoJPHN0b3AgIG9mZnNldD0iMC40MTkxIiBzdHlsZT0ic3RvcC1jb2xvcjojQjdCN0I3Ii8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6Izk4OTg5OCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01MTYuNiwxNjEuOGMwLjksNi41LTU3LDYwLjEtODcuNyw4Ni43YzAsMC03LjcsNy45LTI3LjItMC41Yy0xMS4zLTktMTctMTMuNC0yOC41LTIyLjMNCgljLTUuMS0xMi4zLTcuNy0xOC40LTEyLjctMzAuOWMzMS40LTMwLjUsNjEuMi02Mi43LDkyLjctOTMuMkM0NTMuMywxMDEuNiw1MTYuNSwxNjEuMyw1MTYuNiwxNjEuOHoiLz4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzM3LjYxOTEiIHkxPSIzODMuMTI3OCIgeDI9IjUxNi42Mzg1IiB5Mj0iMzgzLjEyNzgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA0NzEuODg5OCkiPg0KCTxzdG9wICBvZmZzZXQ9IjkuMDkwOTA5ZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6I0I3QjdCNyIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNBREFEQUQiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTE2LjYsMTYxLjhjLTcuOC00Mi45LTE4LjEtODUuOC0zNy0xMjUuNGMtMzguOC0yMC41LTkyLjEtMzQuNi0xMjYuNSwyLjFjLTMuNCwyLjctNS4yLDQuMS04LjcsNi45DQoJYzAsMC05LjgsMjYuMi01LjgsNTZjMCwwLDQ0LTIwLjIsODguNCwxMi45QzQ4MC43LDE1NC4zLDUxNi42LDE2MS44LDUxNi42LDE2MS44eiIvPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzNjQuNDA4OCIgeTE9IjMyOC4wOTIzIiB4Mj0iMjU2LjgyMDYiIHkyPSIzMDAuODk5NiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDQ3MS44ODk4KSI+DQoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0FDQUNBQyIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNDOEM4QzgiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNMjk5LjYsMTkyLjJjMzQsMTguNiw2OC4xLDM3LjEsMTAyLjEsNTUuOGMtMi43LTYuNC0yMC45LTExLjgtNDEuMS01My4ybDAsMGwwLDBjLTIwLTUxLjgtMjctMTEyLTEuNC0xNjMuMw0KCWMtMjcuMSwyMi4xLTQwLjYsMzMuMS02Ny42LDU1LjFDMjYxLjYsMTM2LjMsMjk5LjYsMTkyLjIsMjk5LjYsMTkyLjJ6Ii8+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTg5LjIsMzM5LjhjMC45LDAsMS45LDAuMywyLjgsMWMwLjksMC43LDEuNCwxLjUsMS40LDIuNmMwLDIuNi0xLjIsNC0zLjYsNC4yYy01LjgsMC45LTEwLjcsMi43LTE0LjksNS4zDQoJCWMtNC4yLDIuNi03LjYsNS44LTEwLjMsOS43Yy0yLjcsMy45LTQuNyw4LjMtNiwxMy4yYy0xLjMsNC45LTEuOSwxMC4xLTEuOSwxNS40djM3LjNjMCwyLjYtMS4zLDMuOS0zLjksMy45DQoJCWMtMi42LDAtMy45LTEuMy0zLjktMy45di04NC45YzAtMi42LDEuMy0zLjksMy45LTMuOWMyLjYsMCwzLjksMS4zLDMuOSwzLjlWMzYxYzEuNy0yLjgsMy43LTUuNCw2LTcuOWMyLjMtMi41LDQuOS00LjcsNy43LTYuNw0KCQljMi44LTEuOSw1LjgtMy41LDktNC43QzE4Mi42LDM0MC40LDE4NS45LDMzOS44LDE4OS4yLDMzOS44eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0yNjYsMzM3LjljNi41LDAsMTIuNSwxLjMsMTguMSw0YzUuNiwyLjcsMTAuMyw2LjMsMTQuMywxMC43YzQsNC41LDcuMSw5LjYsOS4zLDE1LjQNCgkJYzIuMiw1LjgsMy4zLDExLjksMy4zLDE4LjJjMCwxLjEtMC40LDItMS4zLDIuOGMtMC44LDAuNy0xLjgsMS4xLTIuOSwxLjFoLTc3LjZjMC42LDQuOCwxLjgsOS41LDMuOCwxMy45DQoJCWMxLjksNC41LDQuNSw4LjMsNy43LDExLjdjMy4yLDMuMyw2LjksNiwxMS4xLDguMWM0LjMsMiw5LDMuMSwxNC4yLDMuMWMxMy43LDAsMjQuNC01LjUsMzItMTYuNGMwLjctMS4zLDEuOS0xLjksMy4zLTEuOQ0KCQljMi42LDAsMy45LDEuMywzLjksMy45YzAsMC4yLTAuMiwwLjgtMC42LDEuOWMtMy45LDYuOS05LjQsMTItMTYuNCwxNS4zYy03LjEsMy4zLTE0LjUsNS0yMi4zLDVjLTYuNSwwLTEyLjUtMS4zLTE3LjktNA0KCQljLTUuNS0yLjctMTAuMi02LjMtMTQuMi0xMC43Yy00LTQuNS03LjEtOS42LTkuMy0xNS40Yy0yLjItNS44LTMuMy0xMS45LTMuMy0xOC4yYzAtNi4zLDEuMS0xMi40LDMuMy0xOC4yDQoJCWMyLjItNS44LDUuMy0xMSw5LjMtMTUuNGM0LTQuNSw4LjctOCwxNC4yLTEwLjdDMjUzLjUsMzM5LjIsMjU5LjUsMzM3LjksMjY2LDMzNy45eiBNMzAyLjcsMzgyLjRjLTAuNC00LjgtMS41LTkuNS0zLjUtMTMuOQ0KCQljLTEuOS00LjUtNC41LTguMy03LjgtMTEuN2MtMy4yLTMuMy03LjEtNi0xMS40LTguMWMtNC40LTItOS0zLjEtMTQuMS0zLjFjLTUuMiwwLTkuOSwxLTE0LjIsMy4xYy00LjMsMi04LDQuNy0xMS4xLDguMQ0KCQljLTMuMiwzLjMtNS43LDcuMi03LjcsMTEuN2MtMS45LDQuNS0zLjIsOS4xLTMuOCwxMy45SDMwMi43eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik00NTYuNSwzMzguMmM1LjcsMCwxMC45LDEuMiwxNS4zLDMuNWM0LjUsMi4zLDguMiw1LjMsMTEuMyw5YzMuMSwzLjcsNS40LDguMSw3LDEzLjFjMS42LDUsMi40LDEwLjEsMi40LDE1LjMNCgkJdjQ5LjhjMCwxLjEtMC40LDItMS4zLDIuOGMtMC44LDAuNy0xLjcsMS4xLTIuNiwxLjFjLTIuNiwwLTMuOS0xLjMtMy45LTMuOXYtNDkuOGMwLTQuMS0wLjYtOC4xLTEuOC0xMi4xYy0xLjItNC0zLTcuNi01LjMtMTAuNw0KCQljLTIuMy0zLjItNS4yLTUuNy04LjgtNy41Yy0zLjUtMS45LTcuNi0yLjgtMTIuMi0yLjhjLTUuOSwwLTEwLjksMS40LTE1LDQuMmMtNC4xLDIuOC03LjQsNi40LTkuOSwxMC43Yy0yLjUsNC40LTQuNCw5LjItNS42LDE0LjUNCgkJYy0xLjIsNS4zLTEuOCwxMC4zLTEuOCwxNS4ydjM4LjRjMCwxLjEtMC40LDItMS4zLDIuOGMtMC44LDAuNy0xLjcsMS4xLTIuNiwxLjFjLTIuNiwwLTMuOS0xLjMtMy45LTMuOXYtNDkuOA0KCQljMC00LjEtMC42LTguMS0xLjgtMTIuMWMtMS4yLTQtMy03LjYtNS4zLTEwLjdjLTIuMy0zLjItNS4yLTUuNy04LjgtNy41Yy0zLjUtMS45LTcuNi0yLjgtMTIuMi0yLjhjLTUuOCwwLTEwLjcsMS0xNC43LDMuMQ0KCQljLTQuMSwyLTcuNSw0LjktMTAuMiw4LjVjLTIuNywzLjYtNC42LDcuOS01LjgsMTIuOWMtMS4yLDUtMS44LDEwLjQtMS44LDE2LjF2NC41djAuM3YzNy42YzAsMi42LTEuMywzLjktMy45LDMuOQ0KCQljLTIuNiwwLTMuOS0xLjMtMy45LTMuOXYtODUuMWMwLTIuNiwxLjMtMy45LDMuOS0zLjljMi42LDAsMy45LDEuMywzLjksMy45djE0LjJjMy4zLTUuOSw3LjgtMTAuNywxMy41LTE0LjMNCgkJYzUuNy0zLjYsMTItNS40LDE5LjEtNS40YzgsMCwxNC44LDIuMywyMC42LDYuOGM1LjcsNC41LDkuOSwxMC41LDEyLjUsMTcuOWMzLjItNy4yLDcuNy0xMy4yLDEzLjYtMTcuOA0KCQlDNDQxLjEsMzQwLjUsNDQ4LjIsMzM4LjIsNDU2LjUsMzM4LjJ6Ii8+DQoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTU0MS4xLDM0MC40YzAuOSwwLDEuOCwwLjQsMi42LDEuM2MwLjgsMC44LDEuMywxLjcsMS4zLDIuNnY4NC42YzAsMC45LTAuNCwxLjgtMS4zLDIuNg0KCQljLTAuOCwwLjgtMS43LDEuMy0yLjYsMS4zYy0xLjEsMC0yLTAuNC0yLjgtMS4zYy0wLjctMC44LTEuMS0xLjctMS4xLTIuNnYtODQuNmMwLTAuOSwwLjQtMS44LDEuMS0yLjYNCgkJQzUzOS4xLDM0MC44LDU0MCwzNDAuNCw1NDEuMSwzNDAuNHoiLz4NCgk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNNjQ5LjEsMzM5LjZjMi42LDAsMy45LDEuMywzLjksMy45bC0wLjYsMi4yTDYyNC42LDM4NmwyNy44LDQwLjZjMC40LDEuMSwwLjYsMS45LDAuNiwyLjINCgkJYzAsMi42LTEuMywzLjktMy45LDMuOWMtMS41LDAtMi41LTAuNi0zLjEtMS43TDYxOS45LDM5M0w1OTQsNDMxLjFjLTAuOSwxLjEtMiwxLjctMy4zLDEuN2MtMi42LDAtMy45LTEuMy0zLjktMy45DQoJCWMwLTAuNCwwLjItMS4xLDAuNi0yLjJsMjcuOC00MC42bC0yNy44LTQwLjNsLTAuNi0yLjJjMC0yLjYsMS4zLTMuOSwzLjktMy45YzEuMywwLDIuNCwwLjYsMy4zLDEuN2wyNS45LDM3LjhsMjYuMi0zNy44DQoJCUM2NDYuNiwzNDAuMSw2NDcuNiwzMzkuNiw2NDkuMSwzMzkuNnoiLz4NCjwvZz4NCjwvc3ZnPg0K')",

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_RegularLog: appProperties.mainText_Color,
      text_InfoLog: appProperties.supportText_Color,
      text_ErrorLog: appProperties.errorText_Color,
      text_WarnLog: appProperties.warningText_Color,
      text_Title_TransactionLog: appProperties.infoText_Color,
      text_Regular_TransactionLog: appProperties.supportText_Color,
      text_Button: appProperties.oppositeText_Color,

      icon_Color_Log_Succeed: appProperties.success_BorderColor,
      icon_Color_Log_Failed: appProperties.errorText_Color,
      icon_BackgroundColor_Log_Call: appProperties.infoText_Color,
      icon_Color_Log_Call: appProperties.icon_AltColor,

      icon_Color_TogglePanel: appProperties.icon_Color,
      icon_HoverColor_TogglePanel: appProperties.icon_HoverColor,
      icon_Color_Menu: appProperties.icon_Color,
      icon_HoverColor_Menu: appProperties.icon_HoverColor,

      bar_Ghost: appProperties.ghostBar,
      bar_Dragging: appProperties.draggingBar,

      input_Search_MenuBar: appProperties.uiElements.inputField({
        BackgroundColor: appProperties.input_BackgroundColor,
        BorderColor: appProperties.input_BorderColor,
        Color: appProperties.input_TextColor
      }),

      dropdown_Filter_MenuBar: appProperties.uiElements.dropdown({
        BackgroundColor: appProperties.dropdown_BackgroundColor,
        BorderColor: appProperties.dropdown_BorderColor,
        Color: appProperties.dropdown_TextColor
      }),

      button_Log_Debug: appProperties.uiElements.button({
        BackgroundColor: appProperties.quaternaryButton_BackgroundColor,
        BorderColor: appProperties.infoButton_BorderColor,
        Color: appProperties.infoButton_TextColor
      }),

      button_Log_Details: appProperties.uiElements.button({
        BackgroundColor: appProperties.quaternaryButton_BackgroundColor,
        BorderColor: appProperties.quaternaryButton_BorderColor,
        Color: appProperties.quaternaryButton_TextColor
      })

    },

    /* ------------------------------------------------------
                              RIGHT PANEL
    /* ------------------------------------------------------ */
    rightPanel: {
      backgroundColor_Panel: appProperties.fifth_BackgroundColor,
      backgroundColor_Tab: appProperties.fifth_BackgroundColor,
      BackgroundColor_Pre: appProperties.primary_BackgroundColor,

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_Teriary: appProperties.sub_supportText_Color,
      text_link: appProperties.brightText_Color,

      bar_Ghost: appProperties.ghostBar,
      bar_Dragging: appProperties.draggingBar,

      icon_Color_TogglePanel: appProperties.icon_Color,
      icon_HoverColor_TogglePanel: appProperties.icon_HoverColor,

      message_Warning_BackgroundColor: appProperties.warning_BackgroundColor,
      message_Warning_BorderColor: appProperties.warning_BorderColor,
      message_Warning_Color: appProperties.warning_TextColor,

      message_Error_BackgroundColor: appProperties.danger_BackgroundColor,
      message_Error_BorderColor: appProperties.danger_BorderColor,
      message_Error_Color: appProperties.danger_TextColor,

      message_Success_BackgroundColor: appProperties.success_BackgroundColor,
      message_Success_BorderColor: appProperties.success_BorderColor,
      message_Success_Color: appProperties.success_TextColor,

      /* ::::::::::::::
          COMPILE TAB
      ::::::::::::::: */
      compileTab: {
        button_Compile: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        button_Details: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),

        button_Publish: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),

        dropdown_CompileContract: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        box_CompileContainer: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.quaternary_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        icon_WarnCompilation_Color: appProperties.warning_BackgroundColor

      },

      /* ::::::::::::::
          RUN TAB
      ::::::::::::::: */
      runTab: {

        additionalText_Color: appProperties.additionalText_Color,

        box_RunTab: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor
        }),

        box_Info_RunTab: appProperties.uiElements.dottedBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BorderColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        dropdown_RunTab: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),
        titlebox_RunTab: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_SecondaryBackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        input_RunTab: appProperties.uiElements.inputField({
          BackgroundColor: appProperties.input_BackgroundColor,
          BorderColor: appProperties.input_BorderColor,
          Color: appProperties.input_TextColor
        }),

        box_Instance: appProperties.uiElements.solidBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor
        }),

        borderBox_Instance: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor,
          BorderColor: appProperties.solidBorderBox_BorderColor
        }),

        button_atAddress: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),
        button_Create: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactButton_BackgroundColor,
          BorderColor: appProperties.transactButton_BorderColor,
          Color: appProperties.transactButton_TextColor
        }),
        button_Constant: appProperties.uiElements.button({
          BackgroundColor: appProperties.constantButton_BackgroundColor,
          BorderColor: appProperties.constantButton_BorderColor,
          Color: appProperties.constantButton_TextColor
        }),
        button_Instance_Call: appProperties.uiElements.button({
          BackgroundColor: appProperties.callButton_BackgroundColor,
          BorderColor: appProperties.callButton_BorderColor,
          Color: appProperties.callButton_TextColor
        }),
        button_Instance_Transact: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactButton_BackgroundColor,
          BorderColor: appProperties.transactButton_BorderColor,
          Color: appProperties.transactButton_TextColor
        }),

        button_Instance_TransactPayable: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactPayableButton_BackgroundColor,
          BorderColor: appProperties.transactPayableButton_BorderColor,
          Color: appProperties.transactPayableButton_TextColor
        }),

        icon_Color_Instance_CopyToClipboard: appProperties.icon_Color,
        icon_AltColor_Instance_CopyToClipboard: appProperties.icon_AltColor,
        icon_HoverColor_Instance_CopyToClipboard: appProperties.icon_HoverColor,

        icon_Color: appProperties.icon_Color,
        icon_HoverColor: appProperties.icon_HoverColor

      },

      /* ::::::::::::::
         TEST TAB
      ::::::::::::::: */
      testTab: {
        box_listTests: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        button_runTests: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        button_generateTestFile: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        color_testPass: appProperties.success_BackgroundColor,
        color_testFail: appProperties.danger_BackgroundColor
      },

      /* ::::::::::::::
         SETTINGS TAB
      ::::::::::::::: */
      settingsTab: {
        box_SolidityVersionInfo: appProperties.uiElements.dottedBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BorderColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        dropdown_SelectCompiler: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        button_LoadPlugin: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),
        button_initPlugin: appProperties.uiElements.button({
          BackgroundColor: appProperties.transactButton_BackgroundColor,
          BorderColor: appProperties.transactButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        })
      },

      /* ::::::::::::::
        DEBUGGER TAB
      ::::::::::::::: */
      debuggerTab: {
        text_Primary: appProperties.mainText_Color,
        text_Secondary: appProperties.supportText_Color,
        text_BgHighlight: appProperties.highlight_BackgroundColor,

        box_Debugger: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        button_Debugger: appProperties.uiElements.button({
          BackgroundColor: appProperties.secondaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.secondaryButton_TextColor
        }),

        button_Debugger_icon_Color: appProperties.icon_ConstantColor,
        button_Debugger_icon_HoverColor: appProperties.icon_HoverColor,

        dropdown_Debugger: appProperties.uiElements.dropdown({
          BackgroundColor: cssProperties.colors.veryLightGrey,
          BorderColor: appProperties.dropdown_BorderColor,
          Color: appProperties.dropdown_TextColor
        }),

        input_Debugger: appProperties.uiElements.inputField({
          BackgroundColor: appProperties.input_BackgroundColor,
          BorderColor: appProperties.input_BorderColor,
          Color: appProperties.input_TextColor
        }),

        debuggerDropdowns_Instructions_Highlight_BackgroundColor: appProperties.secondary_BackgroundColor

      },

      /* ::::::::::::::
        ANALYSIS TAB
      ::::::::::::::: */
      analysisTab: {
        button_Run_AnalysisTab: appProperties.uiElements.button({
          BackgroundColor: appProperties.primaryButton_BackgroundColor,
          BorderColor: appProperties.primaryButton_BorderColor,
          Color: appProperties.primaryButton_TextColor
        }),

        box_AnalysisContainer: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        })
      },

      /* ::::::::::::::
        SUPPORT TAB
      ::::::::::::::: */
      supportTab: {
        box_IframeContainer: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BackgroundColor,
          Color: appProperties.solidBorderBox_TextColor
        }),

        box_SupportInfo: appProperties.uiElements.dottedBorderBox({
          BackgroundColor: appProperties.solidBorderBox_BackgroundColor,
          BorderColor: appProperties.solidBorderBox_BorderColor,
          Color: appProperties.solidBorderBox_TextColor
        })

      }

    }
  }

  return {
    colors: cssProperties.colors,
    appProperties: appProperties,
    borders: cssProperties.borders,
    leftPanel: remixProperties.leftPanel,
    editor: remixProperties.editor,
    terminal: remixProperties.terminal,
    rightPanel: remixProperties.rightPanel,
    remix: remixProperties.remix
  }
}
