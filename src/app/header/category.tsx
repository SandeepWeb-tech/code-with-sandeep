import { Box, Button } from "@mui/material";

const Category = () => {
  return (
    <Box className="flex flex-row justify-center items-center">
      <Button>Men's</Button>
      <Button>Women's</Button>
      <Button>Children's</Button>
      <Button>Toy's</Button>
    </Box>
  );
};

export default Category;
