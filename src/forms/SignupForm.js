import React from "react";
import validate from "./ValidateInfo.js";
import useForm from "./useForm";

function SignupForm() {
	const { values, errors, handleChange, handleSubmit } = useForm(validate);
	return (
		<form action="" onSubmit={handleSubmit}>
			<label htmlFor="name">Username</label>
			<input
				type="text"
				name="username"
				id="name"
				placeholder="Username"
				value={values.username}
				onChange={handleChange}
			/>
			{errors.username && <p>{errors.username}</p>}
			<label htmlFor="email">Email</label>
			<input
				name="email"
				id="email"
				placeholder="Email"
				value={values.email}
				onChange={handleChange}
			/>
			{errors.email && <p>{errors.email}</p>}
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Password"
				value={values.password}
				onChange={handleChange}
			/>
			{errors.password && <p>{errors.password}</p>}
			<label htmlFor="cpassword">Confirm Password</label>
			<input
				type="password"
				name="cpassword"
				id="cpassword"
				placeholder="Confirm Password"
				value={values.cpassword}
				onChange={handleChange}
			/>
			{errors.cpassword && <p>{errors.cpassword}</p>}
			<button type="submit">Submit</button>
		</form>
	);
}

export default SignupForm;
