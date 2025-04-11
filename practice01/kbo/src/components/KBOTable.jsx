import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import './KBOTable.css'

export function KBOTable({rankings}) {

    return (
        <table className="KBOTable">
            <TableHead />
            <TableBody rankings={rankings} />
        </table>
    );
}