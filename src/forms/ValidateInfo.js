export default function ValidateInfo(values) {
	let errors = {};
	if (!values.username) {
		errors.username = "Username is Required";
	}
	if (!values.email) {
		errors.email = "Email is Required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email is not valid";
	}
	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Password's length must be 6 characters long";
	}
	// if (!values.cpassword) {
	// 	errors.cpassword = "Password is required";
	// } else
	if (values.password !== values.cpassword) {
		errors.cpassword = "Passwords Don't match";
	}
	return errors;
}
