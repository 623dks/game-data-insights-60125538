const Navbar = () => {
  return (
    <nav className="nav-glass">
      <div className="section-container flex items-center justify-between h-[56px]">
        <div className="font-heading text-[0.85rem] font-bold text-hi">
          Deep Shukla <span className="text-primary">/</span>{" "}
          <span className="text-primary text-[0.82rem]">Game Data Analytics</span>
        </div>
        <div className="hidden md:flex gap-8">
          {["Introduction", "Data", "Models", "Conclusions"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[0.72rem] font-medium tracking-[0.07em] uppercase text-muted-custom hover:text-hi transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
