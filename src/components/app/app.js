import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

// function App() {
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John', salary: 800, increase: true, id: 1},
                {name: 'Sten', salary: 1000, increase: false, id: 2},
                {name: 'Mary', salary: 5000, increase: true, id: 3}    
        
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {   
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++ // this.maxId = this.maxId + 1;
        }   
        this.setState(({data}) => {           
            return {
                data: [...data, newItem]
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel></SearchPanel>
                    <AppFilter></AppFilter>
                </div>
    
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployeesAddForm 
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;