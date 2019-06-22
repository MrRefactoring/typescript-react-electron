import * as React from 'react';
import {
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';

export class Inputs extends React.Component<{}, {}> {
  public render() {
    return <section className='section pb-0 section-components'>
      <Container className='mb-5'>
        <h3 className='h4 text-success font-weight-bold mb-4'>Inputs</h3>
        <div className='mb-3'>
          <small className='text-uppercase font-weight-bold'>
            Form controls
        </small>
        </div>
        <Row>
          <Col lg='4' sm='6'>
            <FormGroup>
              <Input placeholder='Regular' type='text' />
            </FormGroup>
            <InputGroup className='mb-4'>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <i className='ni ni-zoom-split-in' />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                placeholder='Search'
                type='text'
                onFocus={(e) => this.setState({ searchFocused: true })}
                onBlur={(e) => this.setState({ searchFocused: false })}
              />
            </InputGroup>
          </Col>
          <Col lg='4' sm='6'>
            <FormGroup>
              <Input disabled placeholder='Regular' type='text' />
            </FormGroup>
            <InputGroup className='mb-4'>
              <Input
                placeholder='Birthday'
                type='text'
                onFocus={(e) => this.setState({ birthdayFocused: true })}
                onBlur={(e) => this.setState({ birthdayFocused: false })}
              />
              <InputGroupAddon addonType='append'>
                <InputGroupText>
                  <i className='ni ni-zoom-split-in' />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col lg='4' sm='6'>
            <FormGroup className='has-success'>
              <Input
                className='is-valid'
                placeholder='Success'
                type='text'
              />
            </FormGroup>
            <FormGroup className='has-danger'>
              <Input
                className='is-invalid'
                placeholder='Error Input'
                type='email'
              />
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </section>;
  }
}
