import { useState } from "react"
import "./index.css"
export default function CardFilter({listTransactions, setListTransactions, listFilter, setListFilter}){

    function filterAll(){   
        const cardsfiltered = listTransactions.filter((item)=> item.type === "" )
        setListFilter(cardsfiltered)
    }

    function filterEntries(){
        const cardsfiltered = listTransactions.filter((item)=> item.type === "Entrada" )

        setListFilter(cardsfiltered)
       
    }

    function filterExpensies(){
        const cardsfiltered = listTransactions.filter((item)=> item.type === "Despesa" )

        setListFilter(cardsfiltered)
    }

    return(
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