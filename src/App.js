import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { user, repository, reset } from "./redux/actions";
import Search from "./components/Search";
import User from "./components/User";
import Repository from "./components/Repository";
import PageDoesNotExist from "./components/PageDoesNotExist";
import { Button } from "react-bootstrap";
import "./App.css";

class App extends React.Component {
  setUser = (user) => {
    const { getUser, getRepository } = this.props;
    Promise.all([getUser(user), getRepository(user)]).catch((error) =>
      alert(error)
    );
    console.log(this.props);
  };

  handleResetUser = () => {
    const { resetUser } = this.props;
    resetUser();
  };
  componentDidUpdate() {
    console.log("Update Komponente.");
  }

  render() {
    const { name, repositoryList } = this.props;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            {!name ? (
              <Search setUser={this.setUser} />
            ) : (
              <Redirect to={{ pathname: "/result" }} />
            )}
          </Route>
          <Route path="/result">
            {name ? (
              <>
                <User name={name} />
                <Repository repositoryList={repositoryList} />
                <Button
                  variant="secondary"
                  onClick={this.handleResetUser}
                  type="submit"
                  size="lg"
                  block
                  className="mt-5 mb-5"
                  style={{ width: "100%" }}
                >
                  Reset user
                </Button>
              </>
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )}
          </Route>
          <Route path="*" component={PageDoesNotExist} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.object,
  repositoryList: PropTypes.array,
  getUser: PropTypes.func,
  getRepository: PropTypes.func,
  resetUser: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    name: state.user,
    repositoryList: state.repository,
  };
}

const mapDispatchToProps = {
  getUser: user,
  getRepository: repository,
  resetUser: reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
