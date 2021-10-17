import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import leftArrow from "./homepage/assets/left-arrow.png";

/** Components */
const Card = (props) => (
	<div className='contactus-card'>
		{/*<div className="waves">
    </div>*/}
		{props.children}
	</div>
);

const Form = (props) => (
	<form className='contactus-form'>{props.children}</form>
);

const TextInput = (props) => (
	<div className='text-input'>
		<label
			className={props.focus || props.value !== "" ? "label-focus" : ""}
			htmlFor={props.name}
		>
			{props.label}
		</label>
		<input
			className={props.focus || props.value !== "" ? "input-focus" : ""}
			type='text'
			name={props.name}
			value={props.value}
			onChange={props.onChange}
			onInput={props.onInput}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
		/>
	</div>
);

const TextArea = (props) => (
	<div className='text-area'>
		<label
			className={props.focus || props.value !== "" ? "label-focus" : ""}
			htmlFor={props.name}
		>
			{props.label}
		</label>
		<textarea
			className={props.focus || props.value !== "" ? "input-focus" : ""}
			name={props.name}
			value={props.value}
			onChange={props.onChange}
			onInput={props.onInput}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
		/>
	</div>
);

const Button = (props) => (
	<button className='contactus-button' style={{ borderRadius: "5px" }}>
		{props.children}
	</button>
);

/** Root Component */
class ContactUs extends React.Component {
	constructor() {
		super();
		this.state = {
			name: {
				name: "name",
				label: "Name",
				value: "",
				focus: false,
			},
			email: {
				name: "email",
				label: "Email",
				value: "",
				focus: false,
			},
			message: {
				name: "message",
				label: "Message",
				value: "",
				focus: false,
			},
		};
	}

	handleFocus(e) {
		const name = e.target.name;
		const state = Object.assign({}, this.state[name]);
		state.focus = true;
		this.setState({ [name]: state }, () => {
			console.log(state);
		});
	}

	handleBlur(e) {
		const name = e.target.name;
		const state = Object.assign({}, this.state[name]);
		state.focus = false;
		this.setState({ [name]: state }, () => {
			console.log(state);
		});
	}

	handleChange(e) {
		const name = e.target.name;
		const state = Object.assign({}, this.state[name]);
		state.value = e.target.value;
		this.setState({ [name]: state }, () => {
			console.log(state);
		});
	}

	render() {
		const { name, email, message } = this.state;
		return (
			<div>
				<Link
					to='/'
					style={{
						marginTop: "30px",
						background: "transparent",
						textDecoration: "none",
						color: "#fff",
						fontSize: "1.4em",
						fontWeight: "300",
						display: "flex",
						justifyContent: "center",
						flexWrap: "nowrap",
					}}
				>
					<img
						src={leftArrow}
						style={{ width: "30px", marginRight: "10px" }}
						alt=''
					/>
					back to home
				</Link>
				<div className='contactus-container'>
					<Card>
						<h1>Send us a Message!</h1>
						<Form>
							<TextInput
								{...name}
								onFocus={this.handleFocus.bind(this)}
								onBlur={this.handleBlur.bind(this)}
								onChange={this.handleChange.bind(this)}
							/>
							<TextInput
								{...email}
								onFocus={this.handleFocus.bind(this)}
								onBlur={this.handleBlur.bind(this)}
								onChange={this.handleChange.bind(this)}
							/>
							<TextArea
								{...message}
								onFocus={this.handleFocus.bind(this)}
								onBlur={this.handleBlur.bind(this)}
								onChange={this.handleChange.bind(this)}
							/>
							<Button>Send</Button>
						</Form>
					</Card>
				</div>
			</div>
		);
	}
}

export default ContactUs;
