import React from "react";

const Header = () => {
  return (
    <nav className="text-center items-baseline mb-2 w-full align-top">
      <h1 className="mb-0 text-5xl font-bold text-gray-700 py-2">
        Y-Jacob Mlo
      </h1>
      <h2 className="m-0 ml-2 text-2xl font-semibold text-gray-600 leading-snugish">
        Software Engineer
      </h2>
      <h3 className="m-0 mt-2 ml-2 text-xl font-semibold text-gray-500 leading-snugish">
        Charlotte, North Carolina | Jacobmlo2002@gmail.com | 704-840-8197 |{" "}
        <a
          className="hover:bg-gray-200 underline"
          href="https://www.linkedin.com/in/ymlo"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          className="hover:bg-gray-200 underline"
          href="https://www.github.com/JCMlo02"
        >
          GitHub
        </a>
      </h3>
    </nav>
  );
};

export default Header;
