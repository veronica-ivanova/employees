import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'John', salary: 800, increase: true, id: 1},
        {name: 'Sten', salary: 1000, increase: false, id: 2},
        {name: 'Mary', salary: 5000, increase: true, id: 3}    

    ]
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;