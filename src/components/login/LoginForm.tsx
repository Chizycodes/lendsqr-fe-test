import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface Props {}

const LoginForm: FC<Props> = () => {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'all',
	});

	const onSubmit = (data: any) => {
		if (data) {
			reset()
			navigate('/dashboard');
		}
	};

	return (
		<section className="">
			<div className="login-header">
				<h1>Welcome!</h1>
				<p>Enter details to login.</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						type="email"
						placeholder="Email"
						{...register('email', {
							required: true,
						})}
					/>
					{errors.email && errors.email.type === 'required' && (
						<span role="alert" className="input-error">
							Please enter your email
						</span>
					)}
				</div>

				<div>
					<div className="input-password">
						<input
							type={showPassword ? 'text' : 'password'}
							placeholder="Password"
							{...register('password', {
								required: true,
							})}
						/>
						<p className="password-visible" onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? 'HIDE' : 'SHOW'}
						</p>
					</div>

					{errors.password && errors.password.type === 'required' && (
						<span role="alert" className="input-error">
							Please enter your password
						</span>
					)}
				</div>

				<p>FORGOT PASSWORD?</p>

				<button type="submit"> LOG IN</button>
			</form>
		</section>
	);
};

export default LoginForm;
