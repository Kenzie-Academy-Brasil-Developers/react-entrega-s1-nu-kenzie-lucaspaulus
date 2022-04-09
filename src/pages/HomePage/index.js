import "./index.css"
import nuKenzieLogoType from "../../assets/nuKenzieLogoTypeHomepage.svg"
import dashboardDemo from "../../assets/dashboardDemo.svg"

export default function HomePage({isHomePage, setIsHomePage}){
    function handlePage(){
      
        return setIsHomePage(false)
    }

    return(
        <main className="HomePage">
            <section className="HomePage-container-left-side">
                <figure>
                    <img src={nuKenzieLogoType} alt="logo da nu kenzie"></img>
                </figure>
                <h1>Centralize o controle das suas finanças</h1>
                <p>de forma rápida e segura</p>
                <button onClick={handlePage}>Iniciar</button>
            </section>

            <section className="HomePage-container-right-side">
                <figure>
                    <img src={dashboardDemo} alt="imagem representativa da aplicação nukenzie"></img>
                </figure>
            </section>
           
            
        </main>
    )
}