import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
	const { isAuth, toggleAuth } = useContext(AuthContext);
	return (
		<nav
			style={{
				width: '95%',
				margin: 'auto',
				height: '50px',
				padding: '1rem',
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
				border: '1px solid red',
			}}
		>
			{isAuth ? (
				<button
					onClick={() => {
						toggleAuth();
					}}
				>
					logout
				</button>
			) : (
				<button>login</button>
			)}
		</nav>
	);
};

export default Navbar;
