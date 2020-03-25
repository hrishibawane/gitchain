import React, { Component } from "react";
import Layout from "../components/Layout";
import projhub from "../ethereum/projhub";
import web3 from "../ethereum/web3";
import { Grid, Form, Input, Button, List } from "semantic-ui-react";
import { Router, Link } from "../routes";

class ProjIndex extends Component {
  state = {
    account: "",
    username: "",
    useremail: "",
    userid: "",
    projCount: 0,
    isUser: false,
    name: "",
    email: "",
    items: [],
    loading: false,
    follows: [],
    currUser: "",
    userCount: 0,
    followList: []
  };

  async componentDidMount() {
    const accs = await web3.eth.getAccounts();
    const isUser = await projhub.methods.isUser(accs[0]).call();
    const userCount = await projhub.methods.userCount().call();

    console.log(isUser);
    this.setState({ account: accs[0], isUser: isUser });

    if (isUser) {
      const userDetails = await projhub.methods.getUserDetails(accs[0]).call();

      let follows = []
      for (let i=0; i<userCount; i++) {
        const user = await projhub.methods.users(i).call();
        const isFollower = await projhub.methods.isFollower(userDetails[0], user.owner).call();
        if (isFollower) {
          follows.push(user);
        }
      }

      this.setState({
        userid: userDetails[0],
        username: userDetails[2],
        email: userDetails[3],
        projCount: userDetails[4],
        follows: follows,
        userCount: userCount
      });
      this.renderProjects();
      this.renderFollowers();
    }
  }

  renderFollowers = async () => {
    console.log(this.state.follows);
    const followList = this.state.follows.map((user, index) => {
      return (
        <List.Item key={index} style={{padding:"5px", margin:"5px"}}>
          <List.Content>
            <List.Header>
              <Link route={`/users/${index}`}>
                <a>{user.name}</a>
              </Link>
            </List.Header>
            <List.Description>
              <p>Projects: {user.projCount}</p>
            </List.Description>
          </List.Content>
        </List.Item>
      );
    });
    this.setState({ followList: followList });
  }

  renderProjects = async () => {
    console.log(this.state.projCount);
    const projCount = this.state.projCount;
    const acc = this.state.account;
    let projects = [];
    for (let i = 0; i < projCount; i++) {
      const proj = await projhub.methods.getProjectDetails(acc, i).call();
      projects.push(proj);
    }

    // console.log(projects[0][0], projects[0][1]);

    const items = projects.map((project, index) => {
      const acc = this.state.account;
      return (
        <List.Item key={index} style={{padding:"10px", margin:"10px", border:"1px solid", borderColor:"grey"}}>
          <List.Content>
            <List.Header style={{marginBottom:"10px", fontSize:"18px"}}>
              <Link route={`/projects/${acc}/${project[0]}`}>
                <a>{project[1]}</a>
              </Link>
            </List.Header>
            <List.Description>
              <p style={{color:"grey"}}>{project[2]}</p>
              <p style={{color:"black", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>{project[3]}</p>
            </List.Description>
          </List.Content>
        </List.Item>
      );
    });

    this.setState({ items: items });
  };

  createUser = async () => {
    const name = this.state.name;
    const email = this.state.email;
    const acc = this.state.account;
    this.setState({ name: "", email: "", loading: true });
    try {
      await projhub.methods.createUser(name, email).send({ from: acc });

      console.log("User Registered");
    } catch (err) {
      console.log(err.message);
    }

    this.setState({ loading: false });
    Router.pushRoute("/");
  };

  render() {
    return (
      <div>
        <Layout>
          <div style={{margin:"10px", fontSize:"16px"}}>
            Signed in as <strong>{this.state.username}</strong>
          </div>
          <Grid style={{ margin: "10px" }}>
            <Grid.Column width="4" style={{backgroundColor:"#f0f0f1"}}>
              <h3 style={{marginLeft:"10px"}}>People you follow</h3>
              <List divided items={this.state.followList}/>
            </Grid.Column>
            <Grid.Column width="8">
              <h3 style={{marginLeft:"10px"}}>Projects</h3>
              <List items={this.state.items}/>
            </Grid.Column>
            <Grid.Column width="4" style={{backgroundColor:"#f0f0f1"}}>
              <h3>Signup</h3>
              <Form style={{ padding:"10px", border: "2px solid", borderColor: "grey" }}>
                <Form.Field inline>
                  <label style={{ width: "15%" }}>Name:</label>
                  <Input
                    style={{ width: "70%" }}
                    placeholder="Name"
                    disabled={this.state.isUser}
                    value={this.state.name}
                    onChange={event =>
                      this.setState({ name: event.target.value })
                    }
                  />
                </Form.Field>
                <Form.Field inline>
                  <label style={{ width: "15%" }}>Email:</label>
                  <Input
                    style={{ width: "70%" }}
                    placeholder="Email"
                    disabled={this.state.isUser}
                    value={this.state.email}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </Form.Field>
                <Button
                  loading={this.state.loading}
                  disabled={this.state.isUser}
                  fluid
                  color="teal"
                  size="medium"
                  content="Sign Up"
                  onClick={this.createUser}
                />
              </Form>
            </Grid.Column>
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default ProjIndex;
