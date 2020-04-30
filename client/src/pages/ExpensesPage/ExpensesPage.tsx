import React from 'react';
import { connect } from 'react-redux';
import { startFetchExpenses } from '../../actions/expensesAction';
import { Expense } from '../../types/Expense';
import { AppActions } from '../../types/actions';
import { AppState } from '../../store';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import ListOfExpenses from '../../components/ListOfExpenses/ListOfExpenses';
import Filter from '../../components/Filter/Filter';

interface ExpensesPageProps {
}
interface ExpensesPageState {
    filteredArray: Expense[]
}

type Props = ExpensesPageProps & LinkStateProps & LinkDispatchProps;

export class ExpensesPage extends React.Component<Props, ExpensesPageState> {
    async componentDidMount() {
        await this.props.startFetchExpenses(0);
        this.onFilterChange('');      
    }

    onFilterChange = (value: any) => {
        let filteredArray = this.props.data.expenses.filter((expense) => {
            if (
                value.searchByName &&
                !expense.user.first
                    .toLowerCase()
                    .includes(value.searchByName.toLowerCase()) &&
                !expense.user.last
                    .toLowerCase()
                    .includes(value.searchByName.toLowerCase())
            ) {
                return false;
            } else if (
                value.searchByPlace &&
                !expense.merchant
                    .toLowerCase()
                    .includes(value.searchByPlace.toLowerCase())
            ) {
                return false;
            } else {
                return true;
            }
        });
        this.setState({ filteredArray });
    };

    render() {
        const { total } = this.props.data
        return (
            <>
                <h1>List of expenses</h1>
                <Filter onFilterChange={this.onFilterChange} />
                {this.state && this.state.filteredArray.length > 0
                    ? <ListOfExpenses
                        expenses={this.state.filteredArray}
                        total={total}
                        goToPage={(page) => this.props.startFetchExpenses(page)} />
                    : null
                }
            </>
        );
    }
}

interface LinkStateProps {
    data: { expenses: Expense[], total: number }
}
interface LinkDispatchProps {
    startFetchExpenses: (page?: number) => void;
}

const mapStateToProps = (
    state: AppState,
    ownProps: ExpensesPageProps
): LinkStateProps => {
    return ({
        data: state.data
    });
}

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: ExpensesPageProps
): LinkDispatchProps => ({
    startFetchExpenses: bindActionCreators(startFetchExpenses, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpensesPage);