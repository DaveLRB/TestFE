import styled from 'styled-components';

export const TextColor =styled.p`
color: ${({isEven}) => (isEven ? "red" : "blue")}
`;

export const TextStyle =styled.p`
font-family: cursive;
font-size: 20px;
`;

export const SizeStyle = styled.p`
font-size: ${({isOdd}) => (isOdd ? "20px" : "40px")}
`;

export const ButtonStyle = styled.button`
padding:1em;
border:5px solid red;
border-radius:10px;
font-size: 20px;
`;
