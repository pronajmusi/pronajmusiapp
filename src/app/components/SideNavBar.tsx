export default function SideNavBar(){
    return (
        <div className="drawer">
            <input id="side-nav" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="side-nav" aria-label="close sidebar" className="drawer-overlay"></label>
                <nav className="menu p-4 w-80 min-h-full bg-white text-base-content">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </nav>
            </div>
        </div>
    )
}