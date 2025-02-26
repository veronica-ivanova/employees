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
                {name: 'John', salary: 800, increase: true, rise: true, id: 1},
                {name: 'Sten', salary: 1000, increase: false, rise: false, id: 2},
                {name: 'Mary', salary: 5000, increase: true, rise: false, id: 3}    
            ],
            term: '',
            filter: 'all'
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
    // onToggleIncrease = (id) => {
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index];
    //     //     const newItem = {...old, increase: !old.increase};
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            
    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase }
    //             }
    //             return item;
    //         })
    //     }))
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise }
    //             }
    //             return item;
    //         })
    //     }))

    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))

    }

    searchEmp = (items, term) => {
        // предусмотреть вариант что пользователь ввел и удалил
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1 
        })
    }

    // установление состояния
    onUpdateSearch = (term) =>
        // this.setState({term: term});
        this.setState({term});

    filterEmp = (items, filter) => {
        // return items.filter(item => {
        //     if (filter == "salary") {
        //         return item.salary > 1000
        //     }
        //     if (filter == "rise") {
        //         return item.rise == true
        //     }
        //     return items
            
        // })
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise); //item => if (item.rise) return
            case 'salary':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) =>
        this.setState({filter})

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        // const visibleData = this.searchEmp(this.filterEmp(data, filter), term);
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                employees={employees}
                increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}></SearchPanel>
                    {/* <AppFilter onFilterSelect={this.onFilterSelect}></AppFilter> */}
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}></AppFilter>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm 
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;