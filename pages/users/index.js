import React, { Component } from "react";
import Layout from "../../components/Layout";
import web3 from "../../ethereum/web3";
import projhub from "../../ethereum/projhub";
import { Container, List } from "semantic-ui-react";
import {Link} from "../../routes";

class Users extends Component {

  state = {
    users: [],
    userCount: 0,
    usersList: []
  }

  async componentDidMount() {
    const accs = await web3.eth.getAccounts();
    const userCount = await projhub.methods.userCount().call();

    let users = [];
    for(var i=0; i<userCount; i++) {
      const user = await projhub.methods.users(i).call();
      users.push(user);
    }
    console.log(users);
    this.setState({ account: accs[0], userCount: userCount, users: users });

    this.renderUsers();

  }

  renderUsers = () => {
    const usersList = this.state.users.map((user, index) => {
      return (
        <List.Item key={index} style={{marginBottom:"10px", padding:"10px", border:"1px solid", borderColour:"lightgrey"}}>
          <List.Content>
            <List.Header style={{color:"teal", fontSize:"16px"}}>
              <Link route={`/users/${index}`}>
                <a>{user.name}</a>
              </Link>
            </List.Header>
            <List.Description>
              <div style={{marginTop:"5px"}}>
                <p style={{marginBottom:"0px"}}>Address: {user.owner}</p>
                <p style={{marginTop:"0px"}}>Projects: {user.projCount}</p>
              </div>
            </List.Description>
          </List.Content>
        </List.Item>
      );
    });

    this.setState({ usersList: usersList });
  }

  render() {
    return (
      <Layout>
        <Container style={{padding:"10px"}}>
          <h3>Users</h3>
          <hr/>
          <List items={this.state.usersList}/>
        </Container>
      </Layout>
    );
  }
}

export default Users;
