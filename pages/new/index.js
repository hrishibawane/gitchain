import React, { Component } from "react";
import Layout from "../../components/Layout";
import projhub from "../../ethereum/projhub";
import web3 from "../../ethereum/web3";
import ipfs from "../../ethereum/ipfs";
import { Container, Form, Input, Button } from "semantic-ui-react";
import { Router, Link } from "../../routes";

class NewProject extends Component {
  state = {
    projName: "",
    description: "",
    file1: "",
    fileName: "",
    fileBuffer: [],
    fileNames: [],
    fileCount: "",
    fileInputs: [],
    uid: 0,
    username: "",
    account: "",
    loading: false
  };

  async componentDidMount() {
    const account = await web3.eth.getAccounts();
    const userDetails = await projhub.methods.getUserDetails(account[0]).call();

    this.setState({
      account: account[0],
      uid: userDetails[0],
      username: userDetails[2]
    });
  }

  onSubmit = async event => {
    event.preventDefault();
    console.log(this.state.fileBuffer);
    console.log(this.state.fileNames);
    this.setState({ loading: true });
    try {
      const uid = this.state.uid;
      const projName = this.state.projName;
      const acc = this.state.account;
      const fileNames = this.state.fileNames;
      const description = this.state.description;
      const date = new Date();
      date.setHours(date.getHours() + 5);
      date.setMinutes(date.getMinutes() + 30);
      const timestamp = date.toUTCString().replace("GMT", "IST");

      const fileBuffer = this.state.fileBuffer;
      let filesHash = [];
      for (var i = 0; i < fileBuffer.length; i++) {
        const ipfsHash = await ipfs.add(fileBuffer[i]);
        filesHash.push(ipfsHash[0].hash);
      }
      console.log(acc, filesHash);

      await projhub.methods
        .createProject(
          uid,
          projName,
          timestamp,
          description,
          filesHash,
          fileNames
        )
        .send({ from: acc });

      Router.pushRoute("/");
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ loading: false });
  };

  captureFile = event => {
    // event.stopPropogation();
    event.preventDefault();

    const file = event.target.files[0];
    this.setState({ file1: URL.createObjectURL(file) });
    // console.log(file);

    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader, file.name);
  };

  convertToBuffer = async (reader, fname) => {
    const buffer = await Buffer.from(reader.result);
    let fileBuffer = this.state.fileBuffer;
    let fileNames = this.state.fileNames;
    fileBuffer.push(buffer);
    fileNames.push(fname);
    this.setState({ fileBuffer: fileBuffer, fileNames: fileNames });
  };

  renderFileInputs = event => {
    const fileCount = event.target.value;
    let fileInputs = [];
    for (var i = 0; i < fileCount; i++) {
      let row = (
        <Form.Field key={i}>
          <label style={{ fontSize: "15px" }}>Upload File {i+1}</label>
          <Form.Input
            style={{ fontSize: "15px" }}
            type="file"
            onChange={event => this.captureFile(event)}
          />
        </Form.Field>
      );
      fileInputs.push(row);
    }

    this.setState({ fileCount: fileCount, fileInputs: fileInputs });
  }

  render() {
    return (
      <Layout>
        <Container style={{padding:"10px"}}>
          <h3>Create Project</h3>
          <hr />
          <br />
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label style={{ fontSize: "15px" }}>Project Name</label>
              <Form.Input
                fluid
                style={{ fontSize: "15px" }}
                placeholder="Project Name"
                value={this.state.projName}
                onChange={event =>
                  this.setState({ projName: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: "15px" }}>Project Description</label>
              <Form.TextArea
                rows="8"
                style={{ fontSize: "15px" }}
                placeholder="Project Description"
                value={this.state.description}
                onChange={event =>
                  this.setState({ description: event.target.value })
                }
              />
            </Form.Field>
            {/* <input type="file" webkitdirectory mozdirectory directory /> */}
            <Form.Field>
              <label style={{ fontSize: "15px" }}>No. of Files</label>
              <Form.Input
                fluid
                style={{ fontSize: "15px" }}
                placeholder="No. of Files"
                value={this.state.fileCount}
                onChange={event => this.renderFileInputs(event)}
              />
            </Form.Field>
            {this.state.fileInputs}
            <Button
              loading={this.state.loading}
              content="Create Project"
              size="medium"
              color="teal"
              fluid
            />
          </Form>
          <br/><br/>
        </Container>
      </Layout>
    );
  }
}

export default NewProject;


{/* <Form.Field>
              <label style={{ fontSize: "15px" }}>Upload File 1</label>
              <Form.Input
                style={{ fontSize: "15px" }}
                type="file"
                onChange={event => this.captureFile(event)}
              />
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: "15px" }}>Upload File 2</label>
              <Form.Input
                style={{ fontSize: "15px" }}
                type="file"
                onChange={event => this.captureFile(event)}
              />
            </Form.Field> */}