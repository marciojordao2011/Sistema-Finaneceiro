import * as C from './Style';
import { Item} from '../../types/Item';

type Props = {
    item: Item
}

export function TableItem({item}: Props) {
    return (
        <C.TableLine>
            <C.TableColumn>...</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>R$ {item.value}</C.TableColumn>
        </C.TableLine>
    );
}