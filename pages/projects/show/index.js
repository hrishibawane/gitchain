import React, { Component } from "react";
import Layout from "../../../components/Layout";
import projhub from "../../../ethereum/projhub";
import web3 from "../../../ethereum/web3";
import ipfs from "../../../ethereum/ipfs";
import { Container, Form, Input, Button } from "semantic-ui-react";
import { Router, Link } from "../../../routes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";


class ShowFile extends Component {
  state = {
    projId: 0,
    fileIndex: 0,
    fileHash: "",
    fileContent: "",
    fileName: "",
    userAcc: "",
    projName: "",
    language: ""
  };

  static async getInitialProps(props) {
    return {
      projIndex: props.query.pid,
      fileIndex: props.query.fid
    };
  }

  async componentDidMount() {
    console.log(this.props.projIndex);
    const projId = this.props.projIndex;
    const fileIndex = this.props.fileIndex;
    const accounts = await web3.eth.getAccounts();
    const projDetails = await projhub.methods
      .getProjectDetails(accounts[0], projId)
      .call();
    const projName = projDetails[1];
    const fileHash = projDetails[4][fileIndex];
    const fileName = projDetails[5][fileIndex];
    const language = fileName.split(".")[1];
    const data = await ipfs.files.get(fileHash);
    console.log(data[0].content.toString());

    this.setState({
      projId: projId,
      projName: projName,
      fileIndex: fileIndex,
      fileName: fileName,
      userAcc: accounts[0],
      fileHash: fileHash,
      fileContent: data[0].content.toString(),
      language: language
    });
  }

  render() {
    return (
      <Layout>
        <Container style={{ padding: "10px" }}>
          <h3 style={{ color: "grey" }}>
            {this.state.projName}{this.state.fileName}
          </h3>
          <hr />
          <div
            style={{
              border: "1px solid",
              borderColor: "grey",
            }}
          >
            <SyntaxHighlighter customStyle={{fontSize:"16px"}} language={this.state.language}>
              {this.state.fileContent}
            </SyntaxHighlighter>
              {/* {this.state.fileContent.split("\n").map((line, key) => {
                return (
                  <SyntaxHighlighter key={key} language="cpp">
                    <p style={{ margin: "0px", fontSize: "16px", whiteSpace: "break-spaces"}}>{line}</p>
                  </SyntaxHighlighter>
                );
              })} */}
          </div>
          <br />
          <br />
        </Container>
      </Layout>
    );
  }
}

export default ShowFile;

