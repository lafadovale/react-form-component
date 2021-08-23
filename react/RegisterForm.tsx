import React from 'react'
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import awsExports from "../src/aws-exports.js";
import { Container, Button, Form } from 'react-bootstrap';

interface RegisterFormProps {}

const RegisterForm: StorefrontFunctionComponent<RegisterFormProps> = ({}) => {

  Amplify.configure(awsExports);

  async function addForm() {
    const data = {
      body: {
        name: formState.name,
        email: formState.email,
        phone: formState.phone
      }
    };
  
    console.log(data);
    const apiData = await API.post('formApi', '/contact', data);
    console.log({ apiData });
  }
  
    const formState = { name: '', email: '', phone: '' };
  
  function updateFormState(key: string, value: string) {
    formState[key] = value;
  }

  return (
    <Container>
      <div>
        <h3>Cadastre-se para receber nossos cupons semanais!</h3>
        <br/>
        <Form>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control placeholder="Nome" onChange={e => updateFormState('name', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control placeholder="Telefone" onChange={e => updateFormState('phone', e.target.value)} />
          </Form.Group>
          <Button onClick={addForm}>Enviar</Button>
        </Form>
      </div>
    </Container>)
}

RegisterForm.schema = {
  title: 'editor.registerform.title',
  description: 'editor.registerform.description',
  type: 'object',
  properties: {},
}

export default RegisterForm