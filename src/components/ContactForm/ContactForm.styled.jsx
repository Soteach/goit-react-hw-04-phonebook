import styled from 'styled-components';

const FormContainer = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  margin-top: 32px;
  border: 1px dashed gold;
  border-radius: 4px;
  padding: 16px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
`;

const Input = styled.input`
  width: 175%;
  margin-bottom: 16px;
  color: #53136d;
`;

const Button = styled.button`
  background-color: #53136d;
  width: 128px;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;

  :active {
    box-shadow: 0px 0px 2px #bababa, inset 0px 0px 7px #2b1717;
  }
`;

const Container = styled.div`
  margin-left: 64px;
`;

export { FormContainer, Label, Input, Button, Container };
