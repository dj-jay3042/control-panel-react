import { lazy } from 'react';


const componentMap = {
    'Analytics': lazy(() => import('../pages/Analytics')),
    'Finance': lazy(() => import('../pages/Finance')),
    'Crypto': lazy(() => import('../pages/Crypto')),
    'Apps/Todolist': lazy(() => import('../pages/Apps/Todolist')),
    'Apps/Mailbox': lazy(() => import('../pages/Apps/Mailbox')),
    'Apps/Notes': lazy(() => import('../pages/Apps/Notes')),
    'Apps/Contacts': lazy(() => import('../pages/Apps/Contacts')),
    'Apps/Chat': lazy(() => import('../pages/Apps/Chat')),
    'Apps/Scrumboard': lazy(() => import('../pages/Apps/Scrumboard')),
    'Apps/Calendar': lazy(() => import('../pages/Apps/Calendar')),
    'Apps/Invoice/List': lazy(() => import('../pages/Apps/Invoice/List')),
    'Apps/Invoice/Preview': lazy(() => import('../pages/Apps/Invoice/Preview')),
    'Apps/Invoice/Add': lazy(() => import('../pages/Apps/Invoice/Add')),
    'Apps/Invoice/Edit': lazy(() => import('../pages/Apps/Invoice/Edit')),
    'Components/Tabs': lazy(() => import('../pages/Components/Tabs')),
    'Components/Accordians': lazy(() => import('../pages/Components/Accordians')),
    'Components/Modals': lazy(() => import('../pages/Components/Modals')),
    'Components/Cards': lazy(() => import('../pages/Components/Cards')),
    'Components/Carousel': lazy(() => import('../pages/Components/Carousel')),
    'Components/Countdown': lazy(() => import('../pages/Components/Countdown')),
    'Components/Counter': lazy(() => import('../pages/Components/Counter')),
    'Components/SweetAlert': lazy(() => import('../pages/Components/SweetAlert')),
    'Components/Timeline': lazy(() => import('../pages/Components/Timeline')),
    'Components/Notification': lazy(() => import('../pages/Components/Notification')),
    'Components/MediaObject': lazy(() => import('../pages/Components/MediaObject')),
    'Components/ListGroup': lazy(() => import('../pages/Components/ListGroup')),
    'Components/PricingTable': lazy(() => import('../pages/Components/PricingTable')),
    'Components/LightBox': lazy(() => import('../pages/Components/LightBox')),
    'Elements/Alerts': lazy(() => import('../pages/Elements/Alerts')),
    'Elements/Avatar': lazy(() => import('../pages/Elements/Avatar')),
    'Elements/Badges': lazy(() => import('../pages/Elements/Badges')),
    'Elements/Breadcrumbs': lazy(() => import('../pages/Elements/Breadcrumbs')),
    'Elements/Buttons': lazy(() => import('../pages/Elements/Buttons')),
    'Elements/Buttongroups': lazy(() => import('../pages/Elements/Buttongroups')),
    'Elements/Colorlibrary': lazy(() => import('../pages/Elements/Colorlibrary')),
    'Elements/DropdownPage': lazy(() => import('../pages/Elements/DropdownPage')),
    'Elements/Infobox': lazy(() => import('../pages/Elements/Infobox')),
    'Elements/Jumbotron': lazy(() => import('../pages/Elements/Jumbotron')),
    'Elements/Loader': lazy(() => import('../pages/Elements/Loader')),
    'Elements/Pagination': lazy(() => import('../pages/Elements/Pagination')),
    'Elements/Popovers': lazy(() => import('../pages/Elements/Popovers')),
    'Elements/Progressbar': lazy(() => import('../pages/Elements/Progressbar')),
    'Elements/Search': lazy(() => import('../pages/Elements/Search')),
    'Elements/Tooltip': lazy(() => import('../pages/Elements/Tooltip')),
    'Elements/Treeview': lazy(() => import('../pages/Elements/Treeview')),
    'Elements/Typography': lazy(() => import('../pages/Elements/Typography')),
    'Widgets': lazy(() => import('../pages/Widgets')),
    'FontIcons': lazy(() => import('../pages/FontIcons')),
    'DragAndDrop': lazy(() => import('../pages/DragAndDrop')),
    'Tables': lazy(() => import('../pages/Tables')),
    'DataTables/Basic': lazy(() => import('../pages/DataTables/Basic')),
    'DataTables/Advanced': lazy(() => import('../pages/DataTables/Advanced')),
    'DataTables/Skin': lazy(() => import('../pages/DataTables/Skin')),
    'DataTables/OrderSorting': lazy(() => import('../pages/DataTables/OrderSorting')),
    'DataTables/MultiColumn': lazy(() => import('../pages/DataTables/MultiColumn')),
    'DataTables/MultipleTables': lazy(() => import('../pages/DataTables/MultipleTables')),
    'DataTables/AltPagination': lazy(() => import('../pages/DataTables/AltPagination')),
    'DataTables/Checkbox': lazy(() => import('../pages/DataTables/Checkbox')),
    'DataTables/RangeSearch': lazy(() => import('../pages/DataTables/RangeSearch')),
    'DataTables/Export': lazy(() => import('../pages/DataTables/Export')),
    'DataTables/ColumnChooser': lazy(() => import('../pages/DataTables/ColumnChooser')),
    'Users/Profile': lazy(() => import('../pages/Users/Profile')),
    'Users/AccountSetting': lazy(() => import('../pages/Users/AccountSetting')),
    'Pages/KnowledgeBase': lazy(() => import('../pages/Pages/KnowledgeBase')),
    'Pages/ContactUsBoxed': lazy(() => import('../pages/Pages/ContactUsBoxed')),
    'Pages/ContactUsCover': lazy(() => import('../pages/Pages/ContactUsCover')),
    'Pages/Faq': lazy(() => import('../pages/Pages/Faq')),
    'Pages/ComingSoonBoxed': lazy(() => import('../pages/Pages/ComingSoonBoxed')),
    'Pages/ComingSoonCover': lazy(() => import('../pages/Pages/ComingSoonCover')),
    'Pages/Error404': lazy(() => import('../pages/Pages/Error404')),
    'Pages/Error500': lazy(() => import('../pages/Pages/Error500')),
    'Pages/Error503': lazy(() => import('../pages/Pages/Error503')),
    'Pages/Maintenence': lazy(() => import('../pages/Pages/Maintenence')),
    'Authentication/LoginBoxed': lazy(() => import('../pages/Authentication/LoginBoxed')),
    'Authentication/RegisterBoxed': lazy(() => import('../pages/Authentication/RegisterBoxed')),
    'Authentication/UnlockBoxed': lazy(() => import('../pages/Authentication/UnlockBox')),
    'Authentication/RecoverIdBoxed': lazy(() => import('../pages/Authentication/RecoverIdBox')),
    'Authentication/LoginCover': lazy(() => import('../pages/Authentication/LoginCover')),
    'Authentication/RegisterCover': lazy(() => import('../pages/Authentication/RegisterCover')),
    'Authentication/RecoverIdCover': lazy(() => import('../pages/Authentication/RecoverIdCover')),
    'Authentication/UnlockCover': lazy(() => import('../pages/Authentication/UnlockCover')),
    'About': lazy(() => import('../pages/About')),
    'Error': lazy(() => import('../components/Error')),
    'Charts': lazy(() => import('../pages/Charts')),
    'Forms/Basic': lazy(() => import('../pages/Forms/Basic')),
    'Forms/InputGroup': lazy(() => import('../pages/Forms/InputGroup')),
    'Forms/Layouts': lazy(() => import('../pages/Forms/Layouts')),
    'Forms/Validation': lazy(() => import('../pages/Forms/Validation')),
    'Forms/InputMask': lazy(() => import('../pages/Forms/InputMask')),
    'Forms/Select2': lazy(() => import('../pages/Forms/Select2')),
    'Forms/TouchSpin': lazy(() => import('../pages/Forms/TouchSpin')),
    'Forms/CheckboxRadio': lazy(() => import('../pages/Forms/CheckboxRadio')),
    'Forms/Switches': lazy(() => import('../pages/Forms/Switches')),
    'Forms/Wizards': lazy(() => import('../pages/Forms/Wizards')),
    'Forms/FileUploadPreview': lazy(() => import('../pages/Forms/FileUploadPreview')),
    'Forms/QuillEditor': lazy(() => import('../pages/Forms/QuillEditor')),
    'Forms/MarkDownEditor': lazy(() => import('../pages/Forms/MarkDownEditor')),
    'Forms/DateRangePicker': lazy(() => import('../pages/Forms/DateRangePicker')),
    'Forms/Clipboard': lazy(() => import('../pages/Forms/Clipboard')),
};
export { componentMap };
