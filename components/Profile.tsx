import Image from "next/image";

const Profile = () => {
  return (
    <section className="font-kanit flex px-12 py-16 h-screen relative" id="profile">
      <div className="flex flex-col absolute gap-12 px-6 mt-24">
        <p className="text-6xl md:text-8xl text-center md:text-start">Olá,</p>
        <p className="text-6xl md:text-8xl md:relative left-16 text-center md:text-start">
          eu sou Mateus,
        </p>
        <p className="text-6xl md:text-8xl md:relative left-32 md:whitespace-nowrap text-center md:text-start">
          desenvolvedor frontend.
        </p>
        <Image
          src="/perfil.png"
          alt="Profile"
          className="w-60 h-60 rounded-full md:absolute top-16 left-[90%] mx-auto transform md:-translate-x-1/2 md:-translate-y-1/2"
          width={192}
          height={192}
        />
      </div>
    </section>
  );
};

export default Profile;
