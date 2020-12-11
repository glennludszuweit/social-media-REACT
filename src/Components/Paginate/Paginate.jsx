import { Pagination } from "@material-ui/lab";
import { useStyles } from "./styles";

function Paginate({ postsPerPage, totalPosts, setCurrentPage, currentPage }) {
  const classes = useStyles();
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <div align="center" className={classes.paginateContainer}>
      <Pagination
        color="primary"
        page={currentPage}
        count={pageNumbers.length}
        onChange={(event, value) => setCurrentPage(value)}
      />
    </div>
  );
}

export default Paginate;
