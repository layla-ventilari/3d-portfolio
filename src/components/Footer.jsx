import { Link } from "react-router-dom";



export const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2023 <strong>Layla Ventilari</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
        </div>
      </div>
    </footer>
  );
};