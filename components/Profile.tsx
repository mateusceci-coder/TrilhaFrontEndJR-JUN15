"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Profile = () => {
  return (
    <AnimatePresence>
      <section
        className="font-kanit flex justify-center md:py-16 min-h-screen "
        id="profile"
      >
        <div className="flex flex-col absolute gap-12 mt-16">
          <motion.p
            className="text-4xl text-center lg:text-6xl 2xl:text-7xl md:text-start relative xl:right-12 2xl:right-12"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.0 }}
          >
            Olá,
          </motion.p>
          <motion.p
            className="text-4xl text-center lg:text-6xl relative xl:left-12 2xl:text-7xl 2xl:left-12 md:text-start"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.0 }}
          >
            eu sou <span className="text-red-primary">Mateus</span>,
          </motion.p>
          <motion.p
            className="text-4xl text-center lg:text-6xl relative xl:left-48 2xl:text-7xl 2xl:left-48  md:text-start underline"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.0 }}
          >
            desenvolvedor frontend.
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.0 }}
          >
            <Image
              src="/perfil.png"
              alt="Profile"
              className="w-60 h-60 rounded-full mx-auto"
              width={192}
              height={192}
            />
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Profile;
