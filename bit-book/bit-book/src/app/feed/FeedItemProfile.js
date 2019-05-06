import React from 'react';
import userServices from '../../services/userServices';
import { logger } from 'handlebars';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: []
        }
    }

    loadUser(id) {
        return userServices.getUser(id).then(user => {

            this.setState({
                user
            })
        })
    }

    componentDidMount() {
        this.loadUser(this.props.userId);
    }

    render() {
        return (
            <div className="col-11 itemName">
                <img src={this.state.user.avatar} className='col-2' />
                <h5 className='col-10'>{this.props.name}</h5>
            </div>
        )
    }
}

export default Profile;