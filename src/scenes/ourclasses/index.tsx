import { SelectedPage, classTypes } from '@/shared/types';
import React from 'react';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';
import Class from './Class';
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<classTypes> = [
  {
    name: 'weight traing classes',
    description: 'random description',
    image: image1,
  },
  {
    name: 'yogo classes',
    description: 'random description',
    image: image2,
  },
  {
    name: 'core traing classes',
    description: 'random description',
    image: image3,
  },
  {
    name: 'adventure classes',
    description: 'random description',
    image: image4,
  },
  {
    name: 'fitness classes',
    description: 'random description',
    image: image5,
  },
  {
    name: 'traning classes',
    description: 'random description',
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div>
            <Htext>OUR CLASSES</Htext>
            <p>
              {' '}
              Cardio Kickboxing offers a high-energy workout combining martial
              arts techniques with fast-paced cardio, designed to build stamina,
              improve coordination, and burn calories. Yoga emphasizes
              breathing, strength, flexibility, and balance, blending physical
              postures, meditation, and deep breathing for a holistic mind-body
              connection. Meanwhile, Spin/Cycling provides an intense cardio
              session on stationary bikes, allowing participants to adjust
              resistance levels to challenge their fitness.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name} -${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
