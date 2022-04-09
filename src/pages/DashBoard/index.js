import { useState } from 'react';

import "./index.css"
import DashboardHeader from '../../components/Header';
import Form from "../../components/Form"
import logo from "../../assets/nuKenzieLogoType.svg"
import List from '../../components/List';
import TotalMoney from '../../components/TotalMoney'

export default function DashBoard({isHomePage,setIsHomePage}){

    const  textoTesteOverFlow = `What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

    const [listTransactions, setListTransactions] = useState(
        [
            {description: "Seja Bem-Vindo(a)!", type: "Entrada", value: 0},
            {description: textoTesteOverFlow, type: "Entrada", value: 0},  
       
        ])
 
    const [listFiltered, setListFiltered] = useState([])
        
    //faz o calculo do saldo no dashboard
    const valor = listTransactions.reduce((acumulador, valorAtual) => {
            return acumulador + parseFloat(valorAtual.value)

      }, 0) 

    function handlePage(){
        setIsHomePage(true)
    }

    return(
            // cria o dashboard com suas propriedades
            <main className="DashBoard">  
               
                <DashboardHeader logo={logo} handlePage={handlePage}/>

                <section className="DashBoard__body-container">
                    <section className="DashBoard__body">
                        <section className='DashBoard-container-leftside'>
                            <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
                            <TotalMoney>{valor}</TotalMoney>
                        </section>

                        <section className='DashBoard-container-rightside'>
                            <List listTransactions={listTransactions} setListTransactions={setListTransactions} listFiltered={listFiltered} setListFiltered={setListFiltered}/>
                        </section>
                        
                    </section>
                    
                </section>
            </main>
                             
    )
}