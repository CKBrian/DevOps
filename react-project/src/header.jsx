import './header.css';
import Logo from "./assets/images/logo.png";

function Header () {

	return (
		<>
			<div className="main-header">
				<a href="/" className="brand-logo">
					<img src={Logo} alt="SoundWave"/>
					<div className="brand-logo-name">Soundwave</div>
				</a>
				<nav className="main-nav">
					<ul className="b">
						<li className="c"><a href="discover.html" className="c">Discover</a></li>
						<li className="c"><a href="join.html" className="c">Join</a></li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Header
