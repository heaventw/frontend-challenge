import React, { Component } from 'react';
import FilterInput from '../FilterInput/FilterInput';

interface IFilterProps {
    onFilterChange(search: object): void;
};

interface IFilterState {
    searchByName: string,
    searchByPlace: string
};

class Filter extends Component<IFilterProps, IFilterState> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchByName: '',
            searchByPlace: ''
        }
    }

    onsearchByNameChange = (event: any) => {
        this.setState({ searchByName: event.target.value }, () => this.props.onFilterChange(this.state))
    };

    onsearchByPlace = (event: any) => {
        this.setState({ searchByPlace: event.target.value }, () => this.props.onFilterChange(this.state))
    };

    render() {
        return (
            <div>
                <FilterInput type="text" onChange={this.onsearchByNameChange} value={this.state.searchByName} label='Search by name' />
                <FilterInput type="text" onChange={this.onsearchByPlace} value={this.state.searchByPlace} label='Search by place' />
            </div>
        );
    }
}

export default Filter;