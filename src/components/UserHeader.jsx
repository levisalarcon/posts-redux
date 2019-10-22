import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component{
    render(){
        let name = this.props.user ? this.props.user.name : null;

        return(
            <div>
                {name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader);