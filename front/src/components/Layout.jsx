import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/tickets', label: 'Tickets' },
  { to: '/contratos', label: 'Contratos' },
];

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white shadow-md flex-shrink-0">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">MarIA</h1>
          <p className="text-xs text-gray-500 mt-1">Hotel Boutique del Mar</p>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
