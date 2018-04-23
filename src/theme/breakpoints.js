const {
  screenXs,
  screenSm,
  screenMd,
  screenLg,
  screenXl,
  screenXxl,
} = require('./variables');

module.exports = {
  '--screen-xs': `(min-width: ${screenXs}px)`,
  '--screen-sm': `(min-width: ${screenSm}px)`,
  '--screen-md': `(min-width: ${screenMd}px)`,
  '--screen-lg': `(min-width: ${screenLg}px)`,
  '--screen-xl': `(min-width: ${screenXl}px)`,
  '--screen-xxl': `(min-width: ${screenXxl}px)`,
};
