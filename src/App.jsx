import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import HomePage from '@/pages/HomePage';
import ViewportMeta from '@components/Head/ViewportMeta';

function App() {
  return (
    <>
      <ViewportMeta />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;