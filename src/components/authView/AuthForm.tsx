import { AuthInput } from "./AuthInput";

interface Props {
	label: "Log In" | "Sign Up";
}

export const AuthForm = (props: Props) => {
	return (
		<div>
			<label>
				<p>{props.label}</p>
				<AuthInput />
			</label>
			<button type="submit">{props.label}</button>
		</div>
	);
};
