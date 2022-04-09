import Card from "../Card";
import CardFilter from '../../components/CardFilter';
import CardEmpty from "../CardEmpty";

export default function List({listTransactions, setListTransactions, listFiltered, setListFiltered }){

//função que remove o card 
function removeCard(index){
    const listTransactionsArrObj = listTransactions.splice(index,1)
    const filterTrasctionArrObj = listTransactions.filter((item)=> item !== listTransactionsArrObj)
    setListTransactions(filterTrasctionArrObj)
    
    const listFilteredArrObj = listFiltered.splice(index,1)
    const filterlistFilteredArrObj = listFiltered.filter((item)=> item !== listFilteredArrObj)
    setListFiltered(filterlistFilteredArrObj)

}
    
    return(
        
        <>  
            
            <CardFilter 
            listTransactions={listTransactions} 
            setListTransactions={setListTransactions} 
            listFilter={listFiltered} 
            setListFilter={setListFiltered}/>
            
            {
            listTransactions.length === 0
                ?
                <CardEmpty />
                :

            listFiltered.length === 0
                ?
              
                listTransactions.map((transaction,index2)=>{
                    
                    return (
                        transaction.type === "Entrada" 
                        ?
                        
                        <Card Transaction={transaction} filterFunc={()=>removeCard(index2)} BorderColor={"DashBoard-Card--BorderColor-green"} key={index2}/>
                        :
                        <Card Transaction={transaction} filterFunc={()=>removeCard(index2)}BorderColor={"DashBoard-Card--BorderColor-grey"} key={index2}/>
                        
                    )})
                :
                listFiltered.map((transaction,index1)=>{
                    return (
                        transaction.type === "Entrada" 
                        ?
                        <Card Transaction={transaction} filterFunc={()=>removeCard(index1)} BorderColor={"DashBoard-Card--BorderColor-green"} key={index1}/>
                        :
                        <Card Transaction={transaction}  filterFunc={()=>removeCard(index1)} BorderColor={"DashBoard-Card--BorderColor-grey"} key={index1}/>
                        
                    )
                })
            }
            
        </>
    )
}