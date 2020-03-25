import React, { Component } from "react";
import Layout from "../../../components/Layout";
import projhub from "../../../ethereum/projhub";
import web3 from "../../../ethereum/web3";
import ipfs from "../../../ethereum/ipfs";
import { Grid, Container, Card, Button } from "semantic-ui-react";
import { Router, Link } from "../../../routes";

class DisplayUser extends Component {
  state = {
    userIndex: 0,
    userName: "",
    userAddress: "",
    userEmail: "",
    userProjCount: 0,
    projects: [],
    projCards: [],
    loading: false,
    currUserAdd: "",
    currUserId: "",
    isFollower: true
  };

  static async getInitialProps(props) {
    return {
      userIndex: props.query.index
    };
  }

  async componentDidMount() {
    const userIndex = this.props.userIndex;
    const userDetails = await projhub.methods.users(userIndex).call();
    let currUserAdd = await web3.eth.getAccounts();
    currUserAdd = currUserAdd[0];
    let currUserId = await projhub.methods.getUserDetails(currUserAdd).call();
    currUserId = currUserId[0];
    let isFollower = await projhub.methods.isFollower(currUserId, userDetails[1]).call();
    isFollower = isFollower || (currUserId==userIndex);
    console.log(isFollower);

    let projects = [];
    for (let i = 0; i < userDetails[4]; i++) {
      const proj = await projhub.methods
        .getProjectDetails(userDetails[1], i)
        .call();
      projects.push(proj);
    }

    this.setState({
      userIndex: userIndex,
      userAddress: userDetails[1],
      userName: userDetails[2],
      userEmail: userDetails[3],
      userProjCount: userDetails[4],
      projects: projects,
      currUserAdd: currUserAdd,
      currUserId: currUserId,
      isFollower: isFollower
    });
    console.log(projects);
    this.renderProjcards();
  }

  onFollow = async () => {
    this.setState({ loading: true });
    const userAcc = this.state.userAddress;
    const currUserAdd = this.state.currUserAdd;
    const currUserId = this.state.currUserId;
    console.log(currUserAdd, currUserId);
    try {
      await projhub.methods
        .followUser(currUserId, userAcc)
        .send({ from: currUserAdd });
    }
    catch (err) {
      console.log(err.msg);
    }
    this.setState({ loading: false });
    Router.pushRoute("/");
  }

  renderProjcards = () => {
    const projCards = this.state.projects.map((proj, index) => {
      const acc = this.state.userAddress;
      return {
        key: index,
        header: (
          <div>
            <Link route={`/projects/${acc}/${proj[0]}`}>
              <a>
                <h4>{proj[1]}</h4>
              </a>
            </Link>
          </div>
        ),
        description: (
          <div>
            <p
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {proj[3]}
            </p>
          </div>
        ),
        extra: (
          <div>
            <p>{proj[2]}</p>
          </div>
        )
      };
    });
    this.setState({ projCards: projCards });
  };

  render() {
    return (
      <Layout>
        <Container>
          <Grid>
            <Grid.Column width="5" style={{ marginTop: "20px" }}>
              <div>
                <h2 style={{ marginBottom: "0px" }}>{this.state.userName}</h2>
                <p
                  style={{
                    color: "grey",
                    marginTop: "0px",
                    fontSize: "14px",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {this.state.userAddress}
                </p>
                <p style={{ fontSize: "15px" }}>
                  Email: {this.state.userEmail}
                </p>
                <Button disabled={this.state.isFollower} loading={this.state.loading} color="teal" content="Follow" onClick={() => this.onFollow()}/>
              </div>
            </Grid.Column>
            <Grid.Column
              width="10"
              style={{
                borderLeft: "1px solid",
                borderColor: "lightgrey",
                marginTop: "20px",
                padding: "10px"
              }}
            >
              <Card.Group items={this.state.projCards} />
            </Grid.Column>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default DisplayUser;
