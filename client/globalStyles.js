import { createStyles } from '@material-ui/core';
import yekanRegularTtf from '../client/assets/Fonts/Yekan.ttf';
import yekanRegularWoff from '../client/assets/Fonts/Yekan.woff';
import yekanRegularWoff2 from '../client/assets/Fonts/Yekan.woff2';


const globalStyles = ({ spacing, typography, colors }) =>
  createStyles({
    '@global': {
      '@font-face': [
        {
          fontFamily: 'IRANYekan',
          fontStyle: 'normal',
          fontWeight: 400,
          src: `url(${yekanRegularWoff2}) format('woff2')`,
          fallbacks: {
            src: [
              `url(${yekanRegularWoff})`,
              `url(${yekanRegularTtf}) format('truetype')`,
            ],
          },
        },
        {
          fontFamily: 'IRANYekan',
          fontStyle: 'normal',
          fontWeight: 700,
          src: `url(${yekanBoldWoff2}) format('woff2')`,
          fallbacks: {
            src: [
              `url(${yekanBoldWoff})`,
              `url(${yekanBoldTtf}) format('truetype')`,
            ],
          },
        },
      ],
      html: {
        lineHeight: '1.5',
        WebkitTextSizeAdjust: '100%',
      },
      '*': {
        transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'IRANYekan', sans-serif, Arial",
        boxSizing: 'border-box',

        '&:after, &:before': {
          fontFamily: "'IRANYekan', sans-serif, Arial",
          boxSizing: 'border-box',
        },
        '&[type="checkbox"], &[type="radio"]': {
          boxSizing: 'border-box',
          padding: '0',
        },
        '&[type="number"]': {
          '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
            height: 'auto',
          },
        },
        '&[type="search"]': {
          WebkitAppearance: 'textfield',
          outlineOffset: -2,

          '&::-webkit-search-decoration': {
            WebkitAppearance: 'none',
          },
        },
        '&[hidden]': {
          display: 'none',
        },
        '&::-webkit-file-upload-button': {
          WebkitAppearance: 'button',
          font: 'inherit',
        },
      },
      body: {
        fontFamily: "'IRANYekan', sans-serif, Arial",
        lineHeight: '1.38',
        margin: 0,
      },
      '#react-view': {},
      'h1, h2, h3, h4, h5, h6': {
        margin: [[0, 0, spacing.margin]],
        lineHeight: '1.3',
        letterSpacing: 0,
        textTransform: 'none',
        color: colors.black,
        display: 'block',
        fontFamily: "'IRANYekan', sans-serif, Arial",
      },
      h1: {
        fontSize: typography.fontSize * 1.4,
      },
      h2: {
        fontSize: typography.fontSize * 1.2,
      },
      h3: {
        fontSize: typography.fontSize,
      },
      h4: {
        fontSize: typography.fontSize,
      },
      h5: {
        fontSize: typography.fontSize,
      },
      h6: {
        fontSize: typography.fontSize,
      },
      p: {
        display: 'block',
        margin: [[0, 0, spacing.margin]],
      },
      main: {
        display: 'block',
      },
      hr: {
        boxSizing: 'content-box',
        height: 0,
        overflow: 'visible',
      },
      pre: {
        fontSize: '1em',
      },
      a: {
        backgroundColor: 'transparent',
        textDecoration: 'none',
      },
      'b, strong': {
        fontWeight: 'bold',
      },
      small: {
        fontSize: '80%',
      },
      img: {
        borderStyle: 'none',
      },
      button: {
        WebkitAppearance: 'button',
      },
      input: {
        overflow: 'visible',
      },
      'button, input, optgroup, select, textarea': {
        fontFamily: 'inherit',
        fontSize: '100%',
        lineHeight: '1.15',
        margin: 0,
      },
      'button, input': {
        overflow: 'visible',
      },
      'button, select': {
        textTransform: 'none',
      },
      textarea: {
        overflow: 'auto',
      },
      'button, [type="button"], [type="reset"], [type="submit"]': {
        WebkitAppearance: 'button',

        '&::-moz-focus-inner': {
          borderStyle: 'none',
          padding: '0',
        },
        '&:-moz-focusring': {
          outline: [[1, 'dotted', 'ButtonText']],
        },
      },
      fieldset: {
        padding: '0.35em 0.75em 0.625em',
      },
      legend: {
        boxSizing: 'border-box',
        color: 'inherit',
        display: 'table',
        maxWidth: '100%',
        padding: '0',
        whiteSpace: 'normal',
      },
      progress: {
        verticalAlign: 'baseline',
      },
      details: {
        display: 'block',
      },
      summary: {
        display: 'list-item',
      },
      template: {
        display: 'none',
      },
    },
  });

export default globalStyles;