import LoginForm from '../components/login/LoginForm';
import '../styles/login.scss';

const Login = () => {
	return (
		<section className="login">
			<div className="login-div">
				<section className="login-images">
					<img src="/images/logo.svg" alt="logo" className="logo" />
					<div>
						<img src="/images/login-illus.svg" alt="illustration" />
					</div>
				</section>

				<section className="login-form">
					<img src="/images/logo.svg" alt="logo" className="logo" />

					<LoginForm />
				</section>
			</div>
		</section>
	);
};

export default Login;
