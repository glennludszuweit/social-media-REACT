import React from 'react';
import { Container } from 'react-bootstrap';
import Search from '../Components/Global/Search';
import AllPosts from '../Components/Posts/AllPosts';

function Posts() {
  return (
    <Container className='w-75'>
      <Search />
      <AllPosts />
    </Container>
  );
}

export default Posts;
