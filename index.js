'use strict';
const foregroundColor = '#ffffff';
const backgroundColor = '#222222';
const black = backgroundColor;
const red = '#FF435B';
const green = '#1ABC9C';
const yellow = '#FAC863';
const blue = '#50B4DC';
const magenta = '#B49CDA';
const cyan = '#83AADA';
const gray = '#3F414D';
const brightBlack = '#282833';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#404040',
		cursorColor: '#B49CDA',
		colors: [
      // regular
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// bright
			brightBlack,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			brightWhite
		],
		css: `
			${config.css || ''}
      .tabs. .tabs_list .tabs_text {
        color: #1ABC9C;
      }
			.tab_active:before {
				border-color: #FF435B;
			}
		`
	});
};
