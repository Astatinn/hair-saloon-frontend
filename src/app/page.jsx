import Image from 'next/image';
import hbg from '../../public/Haircut_welcome.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image src={hbg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
        <h1 className="text-6xl text-white mb-48">It's time to book your next haircut</h1>
        <Link href="/registration">
          <button className="bg-slate-50 text-black text-lg px-12 py-2 rounded-lg transition ease-in-out delay-80 mt-40 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700 duration-300">
            Book an Appointment
          </button>
        </Link>
      </div>
    </div>
  );
}
