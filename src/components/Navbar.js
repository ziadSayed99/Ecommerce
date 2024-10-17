import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Cart from "./Cart";
import AccountImg from "./AccountImg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    setActive(section); // Set the active section to change the style
    switch (section) {
      case "Home":
        navigate("/");
        break;
      case "Men":
        navigate("/men");
        break;
      case "Kids":
        navigate("/kids");
        break;
      case "Search":
        navigate("/search");
        break;
      default:
        break;
    }
  };

  return (
    <header className="bg-white">
      <nav className="fixed top-0 z-10 flex w-full bg-[#FBFBFB] py-6 shadow-md shadow-black/5">
        <div className="flex align-start ml-48">
          <a
            href="/"
            className="text-[30px] font-extrabold uppercase tracking-[1px] text-black font-montserrat"
          >
            Clothes Store
          </a>
        </div>

        {/* Popover Group - Desktop Menu Items */}
        <div className="hidden lg:flex lg:gap-x-8 lg:ml-48 h-10">
          {["Home", "Men", "Kids", "Search"].map((section) => (
            <button
              key={section}
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 cursor-pointer text-black hover:text-cyan-500 ${
                active === section && "text-cyan-500"
              }`}
              onClick={() => handleNavigation(section)}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Account and Cart section */}
        <div className="flex items-center ml-auto lg:mr-32">
          <AccountImg />
          <div className="ml-4 hover:cursor-pointer">
            <Cart />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden ml-4">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden z-30"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-custom-black max-h-72">
          <div className="flex items-center justify-between">
            <button className="-m-1.5 p-1.5">
              <span className="sr-only">Clothes Store</span>
              <img alt="" className="h-8 w-auto" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {["Home", "Men", "Kids", "Search"].map((section) => (
                  <button
                    key={section}
                    className={`flex items-center gap-x-1 text-sm font-semibold leading-6 cursor-pointer text-black hover:text-cyan-500 ${
                      active === section ? "text-cyan-500" : "text-black"
                    }`}
                    onClick={() => handleNavigation(section)}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;
