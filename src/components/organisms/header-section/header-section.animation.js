export const headerTopText = {
	start: {
		y: '5vh',
		opacity: 0,
	},
	end: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
		},
	},
};

export const headerBottomText = {
	start: {
		y: '-5vh',
		opacity: 0,
	},
	end: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 0.7,
		},
	},
};

export const button = {
	start: {
		y: '5vh',
		opacity: 0,
	},
	end: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 1,
			duration: 0.7,
		},
	},
};

export const divider = {
	start: {
		width: 0,
	},
	end: {
		width: 200,
		transition: {
			delay: 1,
			duration: 0.7,
		},
	},
};
