import "./index.css"
export default function TotalMoney({listTransactions, setListTransactions, children}){
 

    return(
        // cria a area que calcula o saldo no dashboard
        < div className="DashBoard-Total-Area">
            <div className="DashBoard-Total-Area__header">
                <p className="DashBoard-Total-Area__title">Valor total:</p>
                <p className="DashBoard-Total-Area__value">$ {children}</p>
            </div>
            <div className="DashBoard-Total-Area__body">
                <p className="DashBoard-Total-Area__msg">O valor se refere ao saldo</p>
            </div>
        </div>
    )
}