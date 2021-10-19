import { useState, useEffect } from 'react';
import * as C from './App.Styles'
import {Item} from './types/Item';
import { Category } from './types/Category';
import {categories} from './data/categories';
import {items} from './data/items';
import { getcurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea/Index';
import { InfoArea } from './components/InfoArea/Index';

const App = () => {
  const [list, setlist] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getcurrentMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth (list, currentMonth) );
  },[list,currentMonth] )

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea />

        {/*Area de inserção*/}

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;