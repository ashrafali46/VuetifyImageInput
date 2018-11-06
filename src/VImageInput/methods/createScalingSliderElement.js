export default function($createElement) {
	return $createElement(
		'VSlider',
		{
			class: 'mx-2 my-1',
			props: {
				color: this.remappedScalingSliderColor,
				disabled: this.disabled,
				hideDetails: true,
				max: this.cleanMaxScaling,
				min: this.cleanMinScaling,
				step: 1 / 1000,
				value: this.scaling,
			},
			on: {
				input: this.setScaling,
			},
		},
	);
}
