// eslint-disable-next-line @typescript-eslint/no-unused-vars

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom'
import {InternalAddHeader} from '@nx-monorepo-base/internal/add-header'

export function App() {
  return (
    <div>
      <NxWelcome title="internal" />
      <InternalAddHeader/>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.
              <Link className="bg-green-400 rounded-lg text-md mx-2 p-2" to="/page-2">
                Click here for page 2.
              </Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
