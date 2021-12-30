import React from 'react';

const Footer = () => {
  return (
    <footer class="modif-footer text-light position-absolute mt-3 mb-0 w-100">
      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-light">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-light">
                Privacy policy
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-light">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-light">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-light">
                About
              </a>
            </li>
          </ul>
          <p class="text-center">© 2021 Université Internationale de Tunis</p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
