import styled from 'styled-components';

const PriceTag = styled.span`
  background: ${props => props.theme.red};
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 0px;
`;

export default PriceTag;
