import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <img width="120" src="\images\projects\ArwinLogo-Final.webp" alt="Bild lädt"></img> 
        <p className="text-slate-600">Impressum</p><p className="text-slate-600">Arwin Ghaderi</p><p className="text-slate-600">Hoffmann-von-Fallerslebenweg 4</p><p className="text-slate-600">at: arwin_gh@yahoo.de</p>
      </div>
    </footer>
  );
};

export default Footer;
