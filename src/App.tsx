import { useState, useEffect } from 'react';
import * as C from './App.Styles'
import {Item} from './types/Item';
import { Category } from './types/Category';
import {categories} from './data/categories';
import {items} from './data/items';
import { getcurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea/Index';
import { InfoArea } from './components/InfoArea/Index';
import {InputArea } from './components/InputArea/Index';

const App = () => {
  const [list, setlist] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getcurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0); 

  useEffect(()=>{
    setFilteredList( filterListByMonth (list, currentMonth) );
  },[list,currentMonth] );

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
        if(categories[filteredList[i].Category].expense){
          expenseCount += filteredList[i].value;
        }else{
          incomeCount += filteredList[i].value;
        }
      }
      setIncome(incomeCount);
      setExpense(expenseCount);
  },[filteredList])

  const handleMonthChange =(newMonth: string) => {
    setCurrentMonth(newMonth);
  }
  const handleAddItem = (item: Item) =>{
    let newList = [...list];
    newList.push(item);
    setlist(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;