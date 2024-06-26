export const validateInitialFrame = ({
	initialFrame,
	durationInFrames,
}: {
	initialFrame: unknown;
	durationInFrames: unknown;
}) => {
	if (typeof durationInFrames !== 'number') {
		throw new Error(
			`\`durationInFrames\` must be a number, but is ${JSON.stringify(
				durationInFrames,
			)}`,
		);
	}

	if (typeof initialFrame === 'undefined') {
		return;
	}

	if (typeof initialFrame !== 'number') {
		throw new Error(
			`\`initialFrame\` must be a number, but is ${JSON.stringify(
				initialFrame,
			)}`,
		);
	}

	if (Number.isNaN(initialFrame)) {
		throw new Error(`\`initialFrame\` must be a number, but is NaN`);
	}

	if (!Number.isFinite(initialFrame)) {
		throw new Error(`\`initialFrame\` must be a number, but is Infinity`);
	}

	if (initialFrame % 1 !== 0) {
		throw new Error(
			`\`initialFrame\` must be an integer, but is ${JSON.stringify(
				initialFrame,
			)}`,
		);
	}

	if (initialFrame > durationInFrames - 1) {
		throw new Error(
			`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(
				initialFrame,
			)}`,
		);
	}
};
