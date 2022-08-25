// ======================================
// EXTERNAL
// ======================================
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// ======================================
// INTERNAL
// ======================================
// Components
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
// Pages
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from './pages';
// CSS
import './App.css';

const App = () => {
  const activeMenu = true;

  return (
    <div>
      <Router>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div
            className='fixed right-4 bottom-4'
            style={{
              zIndex: '1000',
            }}
          >
            {/* Tooltip to change theme */}
            <TooltipComponent content='Settings' position='Top'>
              <button
                type='button'
                style={{ background: 'blue', borderRadius: '50%' }}
                className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* SIDEBAR MENU */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}

          {/* NAVABAR */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>

          {/* ROUTING */}
          <div>
            <Routes>
              {/* Dashboard  */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Navigate to='/' />} />

              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/* Apps  */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts  */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
