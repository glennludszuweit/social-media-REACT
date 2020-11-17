import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Status() {
  const auth = useSelector((state) => state.auth);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(auth[0].status);
  }, [auth, status]);

  return status === true ? (
    <h1>Success!</h1>
  ) : status === false ? (
    <h1>Failed!</h1>
  ) : (
    ''
  );
}

export default Status;
