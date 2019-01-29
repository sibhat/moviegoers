import anime from "animejs";
import React from "react";
import "./logo.css";

class Logo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		};
	}
	animeIn = cb => {
		anime({
			targets: ".cls-1",
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: "easeInOutSine",
			duration: 2150,
			delay: function(el, i) {
				return i * 450;
			},
			direction: "alternate",
			loop: true,
			complete: () => cb()
		});
	};
	componentWillAppear(callback) {
		console.log("componentWillAppear");
		this.animeIn(callback);
	}

	render() {
		return (
			this.state.open && (
				<div className="logo_page">
					<svg
						id="Layer_1"
						className="line-drawing-demo"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 936.68 959.25"
					>
						<defs />
						<title>{this.props.title}</title>
						<path
							className="cls-1"
							d="M960.84,975.71V24S370,836.88,485,823.44,28.16,24,28.16,24V975.71L90,976,76,229S408,927,486,927,900,235,900,235l-5,741Z"
							transform="translate(-26.16 -17.85)"
						/>
					</svg>
				</div>
			)
		);
	}
}

export default Logo;
