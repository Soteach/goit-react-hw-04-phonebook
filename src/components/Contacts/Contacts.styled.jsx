import styled from 'styled-components';

const List = styled.ul`
  width: 420px;
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  margin-top: 32px;
  border-radius: 4px;
  padding: 16px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 10px;
`;

const DelButton = styled.button`
  width: 64px;
  height: 24px;
  text-align: center;
  padding: 4px;
  margin-left: 8px;
  background-color: gold;
  color: #53136d;
  border: none;
`;

export { List, ListItem, DelButton };
