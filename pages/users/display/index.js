import React, { Component } from "react";
import Layout from "../../../components/Layout";
import projhub from "../../../ethereum/projhub";
import web3 from "../../../ethereum/web3";
import ipfs from "../../../ethereum/ipfs";
import { Grid, Container, Card, Button } from "semantic-ui-react";
import { Link } from "../../../routes";

class DisplayUser extends Component {
  state = {
    userIndex: 0,
    userName: "",
    userAddress: "",
    userEmail: "",
    userProjCount: 0,
    projects: [],
    projCards: []
  };

  static async getInitialProps(props) {
    return {
      userIndex: props.query.index
    };
  }

  async componentDidMount() {
    const userIndex = this.props.userIndex;
    const userDetails = await projhub.methods.users(userIndex).call();

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
      projects: projects
    });
    console.log(projects);
    this.renderProjcards();
  }

  renderProjcards = () => {
    const projCards = this.state.projects.map((proj, index) => {
      return {
        header: (
          <Link route={`/projects/${proj[0]}`}>
            <a><h4>{proj[1]}</h4></a>
          </Link>
        ),
        description: (
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {proj[3]}
          </p>
        ),
        extra: <p>{proj[2]}</p>
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
                <Button color="teal" content="Follow" />
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