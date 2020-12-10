import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link, MemoryRouter, Route } from "react-router-dom";
import { useStyles } from "./styles";

function Paginate() {
  const classes = useStyles();

  return (
    <div align="center" className={classes.paginateContainer}>
      <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
        <Route>
          {({ location }) => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get("page") || "1", 10);
            return (
              <Pagination
                page={page}
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
                    {...item}
                  />
                )}
              />
            );
          }}
        </Route>
      </MemoryRouter>
    </div>
  );
}

export default Paginate;
