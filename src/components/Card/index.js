import { useState } from "react"
import "../../colors/RootStyle.css"
import "./index.css"
export default function Card({Transaction, BorderColor, filterFunc }){
    const [btnColor, setBtnColor] = useState("")
    const [iconColor, setIcontColor] = useState("")

    // Adiciona um hover no botao em formato svg, cuja função é deletar o card
    function hoverBtnDelete(colorbtn,colorIcon){

        setBtnColor(colorbtn)
        setIcontColor(colorIcon)

    }

    return(

        //Cria o design do card e suas propriedades
        <div className={`DashBoard-Card ${BorderColor}`}>

            <div className="DashBoard-Card__header">
                <div className="DashBoard-Card__header-description-container">
                    <h1 className="DashBoard-Card__header-description">{Transaction.description}</h1>
                </div>
                
                <div className="DashBoard-Card__header-box">
                    <p className="DashBoard-Card__header-value">R$ {Transaction.value}</p>
                    {/* Botao svg com o onclick para chamar a função, que adiciona as classes dinamicamente no rect e path do svg */}
                    <svg onClick={filterFunc} onMouseOver={()=>hoverBtnDelete("btnColorHover" ,"iconColorHover")}
                        onMouseOut={()=> hoverBtnDelete("btnColorDefault","iconColorDefault")} 
                        width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className={btnColor} width="22" height="22" rx="2.46154" transform="matrix(-1 0 0 1 22 0)" fill="#E9ECEF"/>
                        <path className={iconColor} d="M14.3611 6.7222H12.0694L11.8784 6.37845C11.8021 6.22567 11.6493 6.11108 11.4774 
                        6.11108H9.28122C9.10935 6.11108 8.95657 6.22567 8.88018 6.37845L8.70831 6.7222H6.41664C6.24476 6.7222 
                        6.11108 6.87497 6.11108 7.02775V7.63886C6.11108 7.81074 6.24476 7.94442 6.41664 7.94442H14.3611C14.5139 
                        7.94442 14.6666 7.81074 14.6666 7.63886V7.02775C14.6666 6.87497 14.5139 6.7222 14.3611 6.7222ZM7.12324 
                        15.0295C7.14233 15.526 7.54338 15.8889 8.0399 15.8889H12.7187C13.2153 15.8889 13.6163 15.526 13.6354 
                        15.0295L14.0555 8.55553H6.7222L7.12324 15.0295Z" fill="#5B6166"/>
                    </svg>
                   
                </div>
               
            </div>
            
            <div className="DashBoard-Card__footer">
                <p className="DashBoard-Card__footer-typeValue">{Transaction.type}</p>
            </div>
        </div>

    )
}