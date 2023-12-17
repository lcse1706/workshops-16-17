import { Route, Routes, Link } from 'react-router-dom';
import { DashboardPage } from './pages/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Menu, MenuItem } from '@wa/common-ui';
import { ErrorBoundary } from './components/ErrorBoundary';

const queryClient = new QueryClient();

export function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <div>
          <div className="bg-slate-900 text-white pt-2 pb-2">
            <div className="container mx-auto">
              {/* START: routes */}
              {/* These routes and navigation have been generated for you */}
              {/* Feel free to move and update them to fit your needs */}
              <div role="navigation">
                <Menu>
                  <MenuItem>
                    <Link to="/">Home</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/page-2">Page 2</Link>
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <ErrorBoundary fallback={<p>From router</p>}>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route
                  path="/page-2"
                  element={
                    <div>
                      <Link to="/">Click here to go back to root page.</Link>
                    </div>
                  }
                />
              </Routes>
            </ErrorBoundary>
          </div>
          {/* END: routes */}
        </div>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
