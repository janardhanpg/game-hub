import { Menu , MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


const SortSelector = () => {
  return (
   
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>one</MenuItem>
        <MenuItem>two</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>Release</MenuItem>
        <MenuItem>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
  
}

export default SortSelector
