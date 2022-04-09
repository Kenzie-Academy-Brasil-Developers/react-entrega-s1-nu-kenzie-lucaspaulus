import {useState } from "react"
import "../../colors/RootStyle.css"
import "./index.css"
export default function Form({listTransactions, setListTransactions}){
    const [description, setDescription] = useState("")
    const [type, setType] = useState("Entrada")
    const [value, setValue] = useState("")
    
    // cria o template do objeto para adicionar ao card
    function addItem(){ 

        const dados = {
            description,
            type,
            value

        }

        //atualiza as transações 
        setListTransactions([...listTransactions, dados])

        // filtra as despesas e multiplica por -1 
        if (dados.type === "Despesa"){
            dados.value *= -1
        }
        // para inputs vazio, adiciona um 0 para o valor no card
        if(dados.value === ""){
            dados.value = 0
            setListTransactions([...listTransactions, dados])
            //apaga o imput do valor após a submissão
            setValue("")

        }

        else{
             
            setListTransactions([...listTransactions, dados])
            setValue("")
        }

        //apaga o imput da descrição após a submissão
        setDescription("") 
        
    }

    return(
            // cria o dashboard form com suas propriedades
            <form className="DashBoard-Form" onSubmit={(event)=> event.preventDefault()}>

                <div className="DashBoard-Form__description">
                    <label className="DashBoard-Form__description-title">Descrição</label>
                    <input className="DashBoard-Form__description-input" type="text"
                    value={description}
                    onChange={(event)=> setDescription(event.target.value)} 
                    placeholder="Digite aqui sua descrição"></input>
                    <p className="DashBoard-Form__description-input-info">Ex: Compra de roupas</p>
                </div>

                <div className="DashBoard-Form__two-columns">
                    <div className="DashBoard-Form__value">
                        <label className="DashBoard-Form__value-title">Valor</label>
                        <input className="DashBoard-Form__value-input form__value-input--width"  type="number" 
                        value={value} 
                        onChange={(event)=> setValue(event.target.value)} 
                        placeholder="1"  >
                        </input>
                    </div>
                    
                    <div className="DashBoard-Form__type">
                        <label className="DashBoard-Form__type-title">Tipo de valor</label>
                        <select className="DashBoard-Form__type-select" onChange={(event)=> setType(event.target.value)}>
                            <option className="DashBoard-Form__type-option">Entrada</option>
                            <option className="DashBoard-Form__type-option">Despesa</option>
                        </select>
                    </div>
                
                </div>
            
                <button className="DashBoard-Form__btn" type="submit" onClick={()=> addItem()}>Inserir valor</button>
            </form>

    )
}
 