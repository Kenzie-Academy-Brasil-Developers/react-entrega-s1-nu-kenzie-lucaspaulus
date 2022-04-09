import "./index.css"
export default function CardFilter({listTransactions, setListTransactions, listFilter, setListFilter}){
    // filtra todos os cards
    function filterAll(){   
        const cardsfiltered = listTransactions.filter((item)=> item.type === "" )
        setListFilter(cardsfiltered)
    }
    // filtra todas os card do tipo entrada
    function filterEntries(){
        const cardsfiltered = listTransactions.filter((item)=> item.type === "Entrada" )

        setListFilter(cardsfiltered)
       
    }
    //filtra todos os card do tipo despesa
    function filterExpensies(){
        const cardsfiltered = listTransactions.filter((item)=> item.type === "Despesa" )

        setListFilter(cardsfiltered)
    }

    return(

        //adiciona uma area no dashboard, com os respectivos botões que filtram os cards
        <section className="DashBoard-Card-filter-area">
            <h1 className="DashBoard-Card-filter-area__title">Resumo financeiro</h1>
            <div className="DashBoard-Card-filter-area__btn-group">
                <button className="DashBoard-Card-filter-area__btn" onClick={()=> filterAll()}>Todos</button>
                <button className="DashBoard-Card-filter-area__btn" onClick={()=> filterEntries()}>Entradas</button>
                <button className="DashBoard-Card-filter-area__btn" onClick={()=> filterExpensies()}>Despesas</button>
            </div>

        </section>
    )
} 