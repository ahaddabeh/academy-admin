import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NoMatch from './components/NoMatch';


const App = () => {

    return (
        <Switch>
            {routes.map(
                ({ path, exact, component: Component, ...rest }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={props => (
                            <Component {...props} {...rest} />
                        )}
                    />
                )
            )}
            <Route
                render={props => (
                    <NoMatch {...props} />
                )}
            />
        </Switch>
    )
}

export default App;
