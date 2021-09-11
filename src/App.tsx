// Components
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Constants
import { PAGE_NAME_LIST, PAGE_VS_ROUTE, PAGE_VS_COMPONENT, PAGE_NAMES } from './page_info';

export const App = () => (
  <BrowserRouter>
    <Switch>
    {PAGE_NAME_LIST.map(pageName => (
      <Route 
        key={PAGE_VS_ROUTE[pageName]} 
        path={PAGE_VS_ROUTE[pageName]} 
        component={PAGE_VS_COMPONENT[pageName]} 
      />
    ))}
    <Route path="/" component={PAGE_VS_COMPONENT[PAGE_NAMES.HOME]} />
    </Switch>
  </BrowserRouter>
);