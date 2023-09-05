import { SelectedPage } from '@/shared/types';
import React from 'react';
import Logo from '@/assets/Logo.png';
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="" />
          <p className="my-5">
            © 2023 EVOGYM. All rights reserved. Your hub for fitness, wellness,
            and community. Dive into our expansive range of workouts, expert
            advice, and a network of fitness enthusiasts. Get fit, stay
            motivated, and conquer your goals with us. Questions? Contact
            [Contact Information]. Follow us on [Social Media Links]. Stay
            strong, stay connected.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">demo</p>
          <p className="my-5">demo 2</p>
          <p className="my-5">demo 3</p>
        </div>
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">demo</p>
          <p className="my-5">demo 2</p>
          <p className="my-5">demo 3</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
