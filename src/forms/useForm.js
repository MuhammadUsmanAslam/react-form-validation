import React, { useState } from "react";

function useForm(validate) {
	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		cpassword: "",
	});
	const [errors, setErrors] = useState({});
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(values));
	};
	return { values, errors, handleChange, handleSubmit };
}

export default useForm;
