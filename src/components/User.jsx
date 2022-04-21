import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const User = () => {
	const { isAuth, toggleAuth } = useContext(AuthContext);
	const [regUser, setRegUser] = useState({});

	const handleRegisterChan = e => {
		const { name, value } = e.target;
		setRegUser({
			...regUser,
			[name]: value,
		});
	};

	const handleRegisterSub = async e => {
		e.preventDefault();
		const { data } = await axios.post(
			'https://reqres.in/api/register',
			regUser
		);
		if (data.token) {
			setRegUser(data);
			toggleAuth();
		}
	};
	console.log(regUser);
	return (
		<div>
			<h3>login user</h3>
			<form onSubmit={handleRegisterSub}>
				<input
					type='text'
					name='email'
					placeholder='email'
					onChange={handleRegisterChan}
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					onChange={handleRegisterChan}
				/>
				<button>login</button>
				{isAuth ? (
					<>
						<p>Login status: yes</p>
						<p>Token: {regUser.token}</p>
					</>
				) : (
					<p>Login status: no</p>
				)}
			</form>
		</div>
	);
};

export default User;
