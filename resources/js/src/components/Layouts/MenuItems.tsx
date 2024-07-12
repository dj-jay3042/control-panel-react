// /resources/js/src/components/Layouts/MenuItems.tsx

import React, { useEffect, useState } from 'react';
import { postRequest } from '../../utils/Request';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const renderMenu = (items) => {
    return items.map(item => (
        <li key={item.menuTitle} className="nav-item">
            <NavLink to={`${item.menuRoute}`} className="group">
                <div className="flex items-center">
                    {item.menuSvg && <span dangerouslySetInnerHTML={{ __html: item.menuSvg }} />}
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{item.menuTitle}</span>
                </div>
            </NavLink>
            {item.children && item.children.length > 0 && (
                <ul>
                    {renderMenu(item.children)}
                </ul>
            )}
        </li>
    ));
};


const ItemList: React.FC = () => {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const data = await postRequest('/api/getMenuItems');
                setMenuData(data);
            } catch (err) {
                setError(err.message);
                MySwal.fire({
                    title: 'Error fetching menu items',
                    text: err.message,
                    icon: 'error',
                });
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading menu items</div>;

    return (
        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
            {renderMenu(menuData)}
        </ul>
    );
};

export default ItemList;
