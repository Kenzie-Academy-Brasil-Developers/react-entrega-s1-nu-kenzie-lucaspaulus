import CardEmptySVG from "../../assets/cardEmpty.svg"
import "./index.css"
export default function CardEmpty(){

    return(
         // imagems svg quando nao tiver nenhum lançamento no sistema do dashboard
        <div className="CardEmpty">
            <p className="CardEmpty__title">Você ainda não possui nenhum lançamento</p>
            <img className="CardEmpty__imgSvg" alt="sem lançamentos" src={CardEmptySVG}/>
        </div>
        
    )
}