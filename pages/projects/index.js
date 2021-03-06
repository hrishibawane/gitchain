import React, { Component } from "react";
import Layout from "../../components/Layout";
import projhub from "../../ethereum/projhub";
import web3 from "../../ethereum/web3";
import { Router, Link } from "../../routes";
import { List, Container } from "semantic-ui-react";

class ShowProject extends Component {
  state = {
    projId: 0,
    projName: "",
    projTime: "",
    projFileHashes: [],
    projDescription: "",
    projFileNames: [],
    files: []
  };

  static getInitialProps(props) {
    return {
      userAdd: props.query.address,
      projId: props.query.id
    };
  }

  async componentDidMount() {
    const projId = this.props.projId;
    const account = this.props.userAdd;
    const projDetails = await projhub.methods
      .getProjectDetails(account, projId)
      .call();

    this.setState({
      projId: projId,
      projName: projDetails[1],
      projTime: projDetails[2],
      projDescription: projDetails[3],
      projFileHashes: projDetails[4],
      projFileNames: projDetails[5]
    });
    console.log(projId);

    this.renderFiles();
  }

  renderFiles = async () => {
    const files = this.state.projFileNames.map((file, index) => {
      let hash = this.state.projFileHashes[index];
      let projId = this.state.projId;
      let userAdd = this.props.userAdd;
      return (
        <List.Item
          key={index}
          style={{
            padding: "10px",
            border: "1px solid",
            borderColor: "lightgrey"
          }}
        >
          <List.Content>
            <List.Header style={{fontSize: "16px" }}>
              <Link route={`/projects/${userAdd}/${projId}/${index}`} params={{projName: this.state.projName}}>
                <a>{file}</a>
              </Link>
            </List.Header>
          </List.Content>
        </List.Item>
      );
    });
    this.setState({ files: files });
  };

  render() {
    return (
      <Layout>
        <Container style={{padding: "10px"}}>
          <h3 style={{color:"grey"}}>{this.state.projName} /</h3>
          <hr/>
          <List items={this.state.files} />
          <hr/>
          <div style={{padding:"10px", border:"1px solid", borderColor:"lightgrey"}}>
            <h4 style={{color:"grey"}}>Description</h4>
            <p style={{fontSize:"15px"}}>{this.state.projDescription}</p>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default ShowProject;
