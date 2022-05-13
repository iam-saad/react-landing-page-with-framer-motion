export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: 300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			when: 'beforeChildren',
			staggerChildren: 0.25,
		},
	},
	exit: {
		opacity: 0,
		y: 300,
		transition: {
			duration: 0.5,
		},
	},
};

export const titleAnime = {
	hidden: {
		opacity: 0,
		y: 200,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.75,
			ease: 'easeOut',
		},
	},
};

export const fadeAnime = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.75,
			ease: 'easeOut',
		},
	},
};

export const imgAnime = {
	hidden: {
		scale: 1.5,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.75,
			ease: 'easeOut',
		},
	},
};

export const lineAnime = {
	hidden: {
		width: 0,
	},
	show: {
		width: '100%',
		transition: {
			duration: 1,
		},
	},
};

export const slider = {
	hidden: {
		x: '-130%',
		skew: '45deg',
	},
	show: {
		x: '100%',
		skew: '0deg',
		transition: {
			duration: 1,
			ease: 'easeOut',
		},
	},
};
