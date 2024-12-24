
const NavBar = () => {
  const links = [
    { name: "Home", href: "/", searchHref: "/" },
    { name: "Dashboard", href: "/dashboard", searchHref: "/dashboard" },
    { name: "Form", href: "/form", searchHref: "/form" }
  ];

  // Get current path from window location
  const currentPath = window.location.pathname;
  
  const isActive = (itemLink: string) => {
    // Exact match for root, starts with for other paths
    return itemLink === '/' 
      ? currentPath === itemLink 
      : currentPath.startsWith(itemLink) || currentPath === itemLink;
  };

  return (
    <div className="fixed left-0 top-0 w-full h-[3rem]  backdrop-blur-[20rem] z-[99] flex items-center justify-between p-5 pl-3 border-b border-neutral-800/20">
      <a href="/">
        <img src="/images/icon.png" className="w-10 h-10" alt="Logo" />
      </a>
      
      <nav className="flex items-center gap-7">
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`
              text-l font-light
              ${isActive(item.searchHref)
                ? 'text-primary'
                : 'text-primary/60 hover:text-primary'}
            `}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;