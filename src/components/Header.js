import React from "react";

const Header = () => {
  return (
    <header className="text-center py-6 border-b border-gray-200">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Y-Jacob Mlo
      </h1>
      <h2 className="text-xl text-gray-600 mt-1">Software Engineer</h2>
      <div className="flex items-center justify-center gap-4 mt-3 text-sm text-gray-500 flex-wrap">
        <span>Charlotte, North Carolina</span>
        <span>•</span>
        <a href="mailto:Jacobmlo2002@gmail.com" className="hover:text-blue-600 transition-colors">
          Jacobmlo2002@gmail.com
        </a>
        <span>•</span>
        <a href="tel:704-840-8197" className="hover:text-blue-600 transition-colors">
          704-840-8197
        </a>
        <span>•</span>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/ymlo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/JCMlo02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
