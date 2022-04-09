import "./index.css"
export default function DashboardHeader({logo, handlePage}){
    return(
        <header className="DashBoard__header">
            <nav className='DashBoard__header-nav'>
                <figure>
                    <img className='DashBoard__header-logo' src={logo} alt="logo da nu kenzie"></img>
                </figure>
                
                <button className="DashBoard__header-btn" onClick={handlePage}>Inicio</button>
            </nav>
        </header>
    )
}