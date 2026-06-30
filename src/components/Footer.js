import logo from "../assets/Logo .svg"

export default function Footer() {
    return (
        <div className="footer-container">
            <img src={logo} alt="logo of the restaurant" className="logo-img" />
            <nav className="nav">
                <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}