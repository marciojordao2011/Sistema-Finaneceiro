import * as C from './Style';
import { Item} from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import {categories} from '../../data/categories';

type Props = {
    item: Item
}

export function TableItem({item}: Props) {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.Category].color}>
                    {categories[item.Category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.Category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}