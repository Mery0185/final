import logo from "../assets/Logo .svg"

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo of the restaurant" className="logo-img" />
        </div>
    )
}