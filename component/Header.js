import Link from 'next/link'
class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <a className="navbar-brand" href="#">Currency Tracker</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
export default Header;