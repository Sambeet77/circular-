import React from 'react';
import {Form, FormGroup, Input,Button,Label} from 'reactstrap';

class App extends React.Component {
  render() {
    return (
      <><h1>MY CIRCULAR</h1>
      <Form className='sachin'>
      <FormGroup className='grv'>
          <Label for="exampleDate">Date    </Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>
        <FormGroup className='grv'>
          <Label for="exampleSelect">Select a Circular for  </Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>-SELECT-</option>
            <option>Applicants</option>
            <option>Employees</option>
          </Input>
        </FormGroup>
        <FormGroup className='grv'>
        <Label for="exampleText">Post a Circular</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="Type a Circular" />
        </FormGroup>
        <FormGroup className='grv'>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
        </FormGroup>
        <Button className='hello'>POST</Button> 
      </Form> 
      <h1>MY CIRCULAR LIST </h1>
      </>
    );
  }
}
export default App;