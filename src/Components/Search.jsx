import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <InputGroup>
      <FormControl
        type='text'
        placeholder='Search'
        aria-describedby='basic-addon2'
      />
      <InputGroup.Append>
        <Button className='btn btn-secondary' id='basic-addon2'>
          <FaSearch />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default Search;
