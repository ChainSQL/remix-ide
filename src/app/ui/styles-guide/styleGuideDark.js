module.exports = styleGuideDark

function styleGuideDark () {
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
      white: 'hsla(198, 100%, 97%, 1)',
      black: 'hsla(240, 100%, 6%, 1)',
      opacityBlack: 'hsla(240, 100%, 6%, .7)',

      // BLUE
      blue: 'hsla(233, 91%, 36%, 1)',
      lightBlue: 'hsla(202, 91%, 75%, 1)',
      blueLightTrans: 'hsla(202, 91%, 75%, .4)',
      backgroundBlue: 'hsla(240, 100%, 21%, 1)',
      brightBlue: 'hsla(233, 91%, 58%, 1)',
      blueGreyEve: 'hsla(213, 64%, 65%, 1)',
      bluePruneEve: 'hsla(232, 30%, 20%, 1)',
      blueBerrySmog: 'hsla(286, 15%, 22%, 1)',
      blueBlur: 'hsla(232, 30%, 20%, 0.7)',
      blueMascara: 'hsla(187, 100%, 51%, 1)',
      blueMorningGlory: 'hsla(213, 74%, 80%, 1)',
      blueFairyDust: 'hsla(181, 83%, 86%, 1)',
      blueMonday: 'hsla(213, 100%, 16%, 1)',

      // GREY
      grey: 'hsla(0, 0%, 40%, 1)',
      lightGrey: 'hsla(0, 0%, 40%, .5)',
      veryLightGrey: 'hsla(0, 0%, 40%, .2)',

      blueGrey: 'hsla(206, 24%, 58%, .8)',
      greyBlueNight: 'hsla(215, 55%, 18%, 1)',
      greyBlueLight: 'hsla(213, 15%, 58%, 1)',
      greyBlueMed: 'hsla(215, 55%, 28%, 1)',

      desatGrey: 'hsla(173, 17%, 79%, 1)',
      // RED
      strongRed: 'hsla(0, 100%, 71%, 1)',
      red: 'hsla(0, 82%, 82%, 1)',
      lightRed: 'hsla(0, 82%, 82%, .8)',
      // GREEN
      green: 'hsla(141, 75%, 84%, 1)',
      lightGreen: 'hsla(141, 75%, 84%, .5)',
      greenZing: 'hsla(148, 79%, 47%, 1)',
      // PINK
      pink: 'hsla(300, 69%, 76%, 1)',
      lightPink: 'hsla(286, 71%, 88%, 1)',
      // YELLOW
      orange: 'hsla(39, 87%, 50%, 1)',
      lightOrange: 'hsla(39, 87%, 50%, .5)',
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

    aceTheme: 'tomorrow_night_blue',

    /* ------------------------------------------------------
                          BACKGROUND COLORS
    ------------------------------------------------------ */
    primary_BackgroundColor: cssProperties.colors.black,
    secondary_BackgroundColor: cssProperties.colors.backgroundBlue,
    tertiary_BackgroundColor: cssProperties.colors.greyBlueNight,
    quaternary_BackgroundColor: cssProperties.colors.blueGreyEve,
    fifth_BackgroundColor: cssProperties.colors.bluePruneEve,
    seventh_BackgroundColor: cssProperties.colors.blueMonday,
    dark_BackgroundColor: cssProperties.colors.black,
    light_BackgroundColor: cssProperties.colors.white,
    debuggingMode_BackgroundColor: cssProperties.colors.lightViolet,
    highlight_BackgroundColor: cssProperties.colors.greyBlueMed,
    /* ------------------------------------------------------
                              RESIZING
    ******************************************************** */
    ghostBar: cssProperties.colors.blueLightTrans,
    draggingBar: cssProperties.colors.blueGreyEve,

    /* ------------------------------------------------------
                            TEXT COLORS
    ******************************************************** */
    mainText_Color: cssProperties.colors.white,
    supportText_Color: cssProperties.colors.lightBlue,
    sub_supportText_Color: cssProperties.colors.greyBlueLight,
    specialText_Color: cssProperties.colors.greenZing,
    brightText_Color: cssProperties.colors.blueMascara,
    oppositeText_Color: cssProperties.colors.black,
    additionalText_Color: cssProperties.colors.desatGrey,
    errorText_Color: cssProperties.colors.strongRed,
    warningText_Color: cssProperties.colors.orange,
    infoText_Color: cssProperties.colors.violet,
    greyedText_color: cssProperties.colors.desatGrey,
    /* ------------------------------------------------------
                              ICONS
    ******************************************************** */
    icon_Color: cssProperties.colors.white,
    icon_AltColor: cssProperties.colors.black,
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
    warning_BackgroundColor: cssProperties.colors.orange,
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
    dropdown_SecondaryBackgroundColor: cssProperties.colors.blueMorningGlory,
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
    solidBorderBox_TextColor: cssProperties.colors.white,
    solidBorderBox_BackgroundColor: cssProperties.colors.black,
    solidBorderBox_BorderColor: cssProperties.colors.lightBlue,

    /* ------------------------------------------------------
                      SOLID BOX
    ******************************************************** */
    solidBox_TextColor: cssProperties.colors.white,
    solidBox_BackgroundColor: cssProperties.colors.black,

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
    secondaryButton_BackgroundColor: cssProperties.colors.lightBlue,
    secondaryButton_BorderColor: cssProperties.colors.veryLightGrey,

    /* .................
          Teriary
    .................. */
    teriaryButton_TextColor: cssProperties.colors.white,
    teriaryButton_BackgroundColor: cssProperties.colors.greyBlueMed,
    teriaryButton_BorderColor: cssProperties.colors.veryLightGrey,
    /* .................

    /* .................
          Quaternary
    .................. */
    quaternaryButton_TextColor: cssProperties.colors.black,
    quaternaryButton_BackgroundColor: cssProperties.colors.blueMascara,
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
    transactButton_BackgroundColor: cssProperties.colors.blueFairyDust,
    transactButton_BorderColor: cssProperties.colors.lightRed,

    // CONSTANT
    constantButton_TextColor: cssProperties.colors.black,
    constantButton_BackgroundColor: cssProperties.colors.greenZing,
    constantButton_BorderColor: cssProperties.colors.greenZing,

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
        width                   : 250px;
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
      modalDialog_BackgroundColor_Primary: appProperties.fifth_BackgroundColor,
      modalDialog_text_Primary: appProperties.additionalText_Color,
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
      icon_HoverColor_CopyToClipboard: appProperties.icon_HoverColor
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
      backgroundColor_Editor_Context_Highlights: appProperties.dark_BackgroundColor,
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
      backgroundImage_Terminal: "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNzg3LjUgNDcxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA3ODcuNSA0NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMwMDI1NTI7fQ0KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0MntmaWxsOnVybCgjU1ZHSURfMl8pO30NCgkuc3Qze2ZpbGw6dXJsKCNTVkdJRF8zXyk7fQ0KCS5zdDR7ZmlsbDojMTkzQTYyO30NCjwvc3R5bGU+DQo8cmVjdCB5PSIwIiBjbGFzcz0ic3QwIiB3aWR0aD0iNzg3LjUiIGhlaWdodD0iNDcxIi8+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM4OS41MjEzIiB5MT0iMjM0LjU5NzgiIHgyPSI0NjIuNTIxMyIgeTI9IjE1Mi41OTc4Ij4NCgk8c3RvcCAgb2Zmc2V0PSIwLjE4MjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMxODM5NUIiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjU2MTUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMjQ3NkIiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMTgzOTVCIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTUxNi42LDE2MS44YzAuOSw2LjUtNTcsNjAuMS04Ny43LDg2LjdjMCwwLTcuNyw3LjktMjcuMi0wLjVjLTExLjMtOS0xNy0xMy40LTI4LjUtMjIuMw0KCWMtNS4xLTEyLjMtNy43LTE4LjQtMTIuNy0zMC45YzMxLjQtMzAuNSw2MS4yLTYyLjcsOTIuNy05My4yQzQ1My4zLDEwMS42LDUxNi41LDE2MS4zLDUxNi42LDE2MS44eiIvPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMzcuNjQwNSIgeTE9Ijg4Ljc4NSIgeDI9IjUxNi42IiB5Mj0iODguNzg1Ij4NCgk8c3RvcCAgb2Zmc2V0PSIwLjE4MjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMzQTU0NzQiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMTkzQTYyIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggY2xhc3M9InN0MiIgZD0iTTUxNi42LDE2MS44Yy03LjgtNDIuOS0xOC4xLTg1LjgtMzctMTI1LjRjLTM4LjgtMjAuNS05Mi4xLTM0LjYtMTI2LjUsMi4xYy0zLjQsMi43LTUuMiw0LjEtOC43LDYuOQ0KCWMwLDAtOS44LDI2LjItNS44LDU2YzAsMCw0NC0yMC4yLDg4LjQsMTIuOUM0ODAuNywxNTQuMyw1MTYuNiwxNjEuOCw1MTYuNiwxNjEuOHoiLz4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjgwLjA2NTYiIHkxPSIxMzkuNzUiIHgyPSI0MDEuNyIgeTI9IjEzOS43NSI+DQoJPHN0b3AgIG9mZnNldD0iMC4xODIxIiBzdHlsZT0ic3RvcC1jb2xvcjojM0M2MTg3Ii8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzE5M0E2MiIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0yOTkuNiwxOTIuMmMzNCwxOC42LDY4LjEsMzcuMSwxMDIuMSw1NS44Yy0yLjctNi40LTIwLjktMTEuOC00MS4xLTUzLjJsMCwwbDAsMGMtMjAtNTEuOC0yNy0xMTItMS40LTE2My4zDQoJYy0yNy4xLDIyLjEtNDAuNiwzMy4xLTY3LjYsNTUuMUMyNjEuNiwxMzYuMywyOTkuNiwxOTIuMiwyOTkuNiwxOTIuMnoiLz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTg5LjIsMzM5LjhjMC45LDAsMS45LDAuMywyLjgsMWMwLjksMC43LDEuNCwxLjUsMS40LDIuNmMwLDIuNi0xLjIsNC0zLjYsNC4yYy01LjgsMC45LTEwLjcsMi43LTE0LjksNS4zDQoJCQljLTQuMiwyLjYtNy42LDUuOC0xMC4zLDkuN2MtMi43LDMuOS00LjcsOC4zLTYsMTMuMmMtMS4zLDQuOS0xLjksMTAuMS0xLjksMTUuNHYzNy4zYzAsMi42LTEuMywzLjktMy45LDMuOQ0KCQkJYy0yLjYsMC0zLjktMS4zLTMuOS0zLjl2LTg0LjljMC0yLjYsMS4zLTMuOSwzLjktMy45YzIuNiwwLDMuOSwxLjMsMy45LDMuOVYzNjFjMS43LTIuOCwzLjctNS40LDYtNy45czQuOS00LjcsNy43LTYuNw0KCQkJYzIuOC0xLjksNS44LTMuNSw5LTQuN0MxODIuNiwzNDAuNCwxODUuOSwzMzkuOCwxODkuMiwzMzkuOHoiLz4NCgkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTI2NiwzMzcuOWM2LjUsMCwxMi41LDEuMywxOC4xLDRzMTAuMyw2LjMsMTQuMywxMC43YzQsNC41LDcuMSw5LjYsOS4zLDE1LjRjMi4yLDUuOCwzLjMsMTEuOSwzLjMsMTguMg0KCQkJYzAsMS4xLTAuNCwyLTEuMywyLjhjLTAuOCwwLjctMS44LDEuMS0yLjksMS4xaC03Ny42YzAuNiw0LjgsMS44LDkuNSwzLjgsMTMuOWMxLjksNC41LDQuNSw4LjMsNy43LDExLjdjMy4yLDMuMyw2LjksNiwxMS4xLDguMQ0KCQkJYzQuMywyLDksMy4xLDE0LjIsMy4xYzEzLjcsMCwyNC40LTUuNSwzMi0xNi40YzAuNy0xLjMsMS45LTEuOSwzLjMtMS45YzIuNiwwLDMuOSwxLjMsMy45LDMuOWMwLDAuMi0wLjIsMC44LTAuNiwxLjkNCgkJCWMtMy45LDYuOS05LjQsMTItMTYuNCwxNS4zYy03LjEsMy4zLTE0LjUsNS0yMi4zLDVjLTYuNSwwLTEyLjUtMS4zLTE3LjktNGMtNS41LTIuNy0xMC4yLTYuMy0xNC4yLTEwLjdjLTQtNC41LTcuMS05LjYtOS4zLTE1LjQNCgkJCXMtMy4zLTExLjktMy4zLTE4LjJjMC02LjMsMS4xLTEyLjQsMy4zLTE4LjJjMi4yLTUuOCw1LjMtMTEsOS4zLTE1LjRjNC00LjUsOC43LTgsMTQuMi0xMC43QzI1My41LDMzOS4yLDI1OS41LDMzNy45LDI2NiwzMzcuOXoNCgkJCSBNMzAyLjcsMzgyLjRjLTAuNC00LjgtMS41LTkuNS0zLjUtMTMuOWMtMS45LTQuNS00LjUtOC4zLTcuOC0xMS43Yy0zLjItMy4zLTcuMS02LTExLjQtOC4xYy00LjQtMi05LTMuMS0xNC4xLTMuMQ0KCQkJYy01LjIsMC05LjksMS0xNC4yLDMuMWMtNC4zLDItOCw0LjctMTEuMSw4LjFjLTMuMiwzLjMtNS43LDcuMi03LjcsMTEuN2MtMS45LDQuNS0zLjIsOS4xLTMuOCwxMy45SDMwMi43eiIvPg0KCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNNDU2LjUsMzM4LjJjNS43LDAsMTAuOSwxLjIsMTUuMywzLjVjNC41LDIuMyw4LjIsNS4zLDExLjMsOWMzLjEsMy43LDUuNCw4LjEsNywxMy4xczIuNCwxMC4xLDIuNCwxNS4zdjQ5LjgNCgkJCWMwLDEuMS0wLjQsMi0xLjMsMi44Yy0wLjgsMC43LTEuNywxLjEtMi42LDEuMWMtMi42LDAtMy45LTEuMy0zLjktMy45di00OS44YzAtNC4xLTAuNi04LjEtMS44LTEyLjFjLTEuMi00LTMtNy42LTUuMy0xMC43DQoJCQljLTIuMy0zLjItNS4yLTUuNy04LjgtNy41Yy0zLjUtMS45LTcuNi0yLjgtMTIuMi0yLjhjLTUuOSwwLTEwLjksMS40LTE1LDQuMmMtNC4xLDIuOC03LjQsNi40LTkuOSwxMC43DQoJCQljLTIuNSw0LjQtNC40LDkuMi01LjYsMTQuNXMtMS44LDEwLjMtMS44LDE1LjJWNDI5YzAsMS4xLTAuNCwyLTEuMywyLjhjLTAuOCwwLjctMS43LDEuMS0yLjYsMS4xYy0yLjYsMC0zLjktMS4zLTMuOS0zLjl2LTQ5LjgNCgkJCWMwLTQuMS0wLjYtOC4xLTEuOC0xMi4xYy0xLjItNC0zLTcuNi01LjMtMTAuN2MtMi4zLTMuMi01LjItNS43LTguOC03LjVjLTMuNS0xLjktNy42LTIuOC0xMi4yLTIuOGMtNS44LDAtMTAuNywxLTE0LjcsMy4xDQoJCQljLTQuMSwyLTcuNSw0LjktMTAuMiw4LjVzLTQuNiw3LjktNS44LDEyLjljLTEuMiw1LTEuOCwxMC40LTEuOCwxNi4xdjQuNXYwLjN2MzcuNmMwLDIuNi0xLjMsMy45LTMuOSwzLjlzLTMuOS0xLjMtMy45LTMuOVYzNDQNCgkJCWMwLTIuNiwxLjMtMy45LDMuOS0zLjlzMy45LDEuMywzLjksMy45djE0LjJjMy4zLTUuOSw3LjgtMTAuNywxMy41LTE0LjNjNS43LTMuNiwxMi01LjQsMTkuMS01LjRjOCwwLDE0LjgsMi4zLDIwLjYsNi44DQoJCQljNS43LDQuNSw5LjksMTAuNSwxMi41LDE3LjljMy4yLTcuMiw3LjctMTMuMiwxMy42LTE3LjhDNDQxLjEsMzQwLjUsNDQ4LjIsMzM4LjIsNDU2LjUsMzM4LjJ6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik01NDEuMSwzNDAuNGMwLjksMCwxLjgsMC40LDIuNiwxLjNjMC44LDAuOCwxLjMsMS43LDEuMywyLjZ2ODQuNmMwLDAuOS0wLjQsMS44LTEuMywyLjYNCgkJCWMtMC44LDAuOC0xLjcsMS4zLTIuNiwxLjNjLTEuMSwwLTItMC40LTIuOC0xLjNjLTAuNy0wLjgtMS4xLTEuNy0xLjEtMi42di04NC42YzAtMC45LDAuNC0xLjgsMS4xLTIuNg0KCQkJQzUzOS4xLDM0MC44LDU0MCwzNDAuNCw1NDEuMSwzNDAuNHoiLz4NCgkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTY0OS4xLDMzOS42YzIuNiwwLDMuOSwxLjMsMy45LDMuOWwtMC42LDIuMkw2MjQuNiwzODZsMjcuOCw0MC42YzAuNCwxLjEsMC42LDEuOSwwLjYsMi4yDQoJCQljMCwyLjYtMS4zLDMuOS0zLjksMy45Yy0xLjUsMC0yLjUtMC42LTMuMS0xLjdsLTI2LjEtMzhMNTk0LDQzMS4xYy0wLjksMS4xLTIsMS43LTMuMywxLjdjLTIuNiwwLTMuOS0xLjMtMy45LTMuOQ0KCQkJYzAtMC40LDAuMi0xLjEsMC42LTIuMmwyNy44LTQwLjZsLTI3LjgtNDAuM2wtMC42LTIuMmMwLTIuNiwxLjMtMy45LDMuOS0zLjljMS4zLDAsMi40LDAuNiwzLjMsMS43bDI1LjksMzcuOGwyNi4yLTM3LjgNCgkJCUM2NDYuNiwzNDAuMSw2NDcuNiwzMzkuNiw2NDkuMSwzMzkuNnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==')",

      text_Primary: appProperties.mainText_Color,
      text_Secondary: appProperties.supportText_Color,
      text_RegularLog: appProperties.mainText_Color,
      text_InfoLog: appProperties.supportText_Color,
      text_WarnLog: appProperties.warningText_Color,
      text_ErrorLog: appProperties.errorText_Color,
      text_Title_TransactionLog: appProperties.infoText_Color,
      text_Regular_TransactionLog: appProperties.supportText_Color,
      text_Button: appProperties.oppositeText_Color,

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
      backgroundColor_Panel: appProperties.seventh_BackgroundColor,
      backgroundColor_Tab: appProperties.seventh_BackgroundColor,
      BackgroundColor_Pre: appProperties.dark_BackgroundColor,

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
        box_RunTab: appProperties.uiElements.solidBorderBox({
          BackgroundColor: appProperties.solidBox_BackgroundColor,
          Color: appProperties.solidBox_TextColor
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
        icon_HoverColor_Instance_CopyToClipboard: appProperties.icon_HoverColor

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
          BackgroundColor: appProperties.teriaryButton_BackgroundColor,
          BorderColor: appProperties.secondaryButton_BorderColor,
          Color: appProperties.teriaryButton_TextColor
        }),

        button_Debugger_icon_Color: appProperties.icon_ConstantColor,
        button_Debugger_icon_HoverColor: appProperties.icon_HoverColor,

        dropdown_Debugger: appProperties.uiElements.dropdown({
          BackgroundColor: appProperties.dropdown_BackgroundColor,
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
