import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState("hidden");
  // useEffect(() => {
  //   const menu = document.querySelector("#menu");
  //   const burger = document.querySelector("#burger");
  //   burger.addEventListener("click", () => {
  //     if (menu.classList.contains("hidden")) {
  //       setHidden("");
  //     } else {
  //       setHidden("hidden");
  //     }
  //   });
  // }, []);
  const hideFunction = () => {
    if (hidden) {
      setHidden("");
    } else setHidden("hidden");
  };
  return (
    <div className="text-gray-600 font-body grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/" className="hover:text-gray-950">
                Food Ninja
              </a>
            </h1>
            <div
              className="px-4 cursor-pointer md:hidden"
              id="burger"
              onClick={hideFunction}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <ul className={`text-sm mt-6 ${hidden} md:block`} id="menu">
            <li className="text-gray-700 font-bold">
              <a
                href="#"
                className="px-4 flex justify-end py-2 border-r-4 border-primary"
              >
                <span>Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 flex justify-end py-2 border-r-4 border-gray-300"
              >
                <span>About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 flex justify-end py-2 border-r-4 border-gray-300"
              >
                <span>Contact</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="flex justify-center md:justify-end">
          <a
            href="#"
            className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            Login
          </a>
          <a
            href="#"
            className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            Logout
          </a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semobold">For Ninja</h3>
        </header>
        <div>
          <h4 className="font-bold mt-4 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-3">
            <div className="card">
              <img
                src="https://feelgoodfoodie.net/wp-content/uploads/2022/12/Vegetable-Stew-10.jpg"
                alt=""
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="block text-sm text-gray-500">
                  Recipe By Mario
                </span>
              </div>
              <div className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                src="https://feelgoodfoodie.net/wp-content/uploads/2022/12/Vegetable-Stew-10.jpg"
                alt=""
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="block text-sm text-gray-500">
                  Recipe By Mario
                </span>
              </div>
              <div className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                src="https://feelgoodfoodie.net/wp-content/uploads/2022/12/Vegetable-Stew-10.jpg"
                alt=""
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="block text-sm text-gray-500">
                  Recipe By Mario
                </span>
              </div>
              <div className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular Recipes
          </h4>
          <div className="mt-8">{/* card here */}</div>
          <div className="flex justify-center">
            <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              Load More
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
