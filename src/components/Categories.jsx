import styled from "styled-components";
import { categories } from "../data.js";
import { mobile } from "../responsive.js";
import CategoriItem from "./CategoriItem.jsx";

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding: "0", flexDirection: "column"})}

`;

const Categories = () => {
  return <Container>
    {categories.map(item=>(
        <CategoriItem item={item} key={item.id}/>
    ))}
  </Container>;
};

export default Categories;
