import React from 'react';
import Header from '../../partials/header/Header';
import Footer from '../../partials/footer/Footer';
import ListOfPeople from './ListOfPeople';
import Search from './Search';
import userService from '../../services/userServices';

class People extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            searchText: ''
        }
        this.searchUsers = this.searchUsers.bind(this);
    }

    loadPeople() {
        userService.getUsers().then(users => {
            this.setState({
                users
            })
        })
    }


    componentDidMount() {
        this.loadPeople()
    }

    searchUsers(text) {
        this.setState({
            searchText: text
        })
    }



    render() {
        return (
            <div>
                <Header />
                <div className='col-6 offset-3'>
                    <Search search={this.searchUsers} />
                    <ListOfPeople users={this.state.users} search={this.state.searchText} />
                </div>
                <Footer />

            </div>
        )
    }
}

export default People;