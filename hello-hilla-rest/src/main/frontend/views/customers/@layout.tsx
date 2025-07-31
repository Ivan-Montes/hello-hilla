import { Outlet } from 'react-router';

export default function CustomersLayout() {
    return (
        <div style={{ padding: '30px',
                backgroundColor: 'yellow',
                height: '100%' }}> 
            <header>
                <h1>Customers</h1>
            </header>

            <main>
                <Outlet />  
            </main>
        </div>
    );
}