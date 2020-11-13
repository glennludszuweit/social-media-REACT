import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <InputGroup className='my-3'>
      <FormControl type='text' placeholder='Search' />
      <InputGroup.Append>
        <Button className='btn btn-danger'>
          <FaSearch />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default Search;
