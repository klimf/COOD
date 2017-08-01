import { palette, unit } from '../../utils/constants';

const buttonThemes = {
  black: {
    bgColor: palette.transparent,
    borderColor: palette.black,
    textColor: palette.black,
    shadow: 'none',
    bgColorHover: palette.black,
    textColorHover: palette.white,
    borderColorHover: palette.black,
    shadowHover: 'none',
  },
  white: {
    bgColor: palette.transparent,
    borderColor: palette.white,
    textColor: palette.white,
    shadow: 'none',
    bgColorHover: palette.white,
    textColorHover: palette.black,
    borderColorHover: palette.white,
    shadowHover: 'none',
  },
  primary: {
    bgColor: palette.primary,
    borderColor: palette.transparent,
    textColor: palette.white,
    shadow: 'none',
    bgColorHover: palette.primary,
    textColorHover: palette.white,
    borderColorHover: palette.transparent,
    shadowHover: `0 8px 24px ${palette.dark}`,
  },
};

export default buttonThemes;
