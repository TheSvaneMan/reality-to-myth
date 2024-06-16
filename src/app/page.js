
import Image from "next/image";
import UserForm from './userForm';

export default async function Home() {
  return (
    <main className="justify-between min-w-screen">
      <div className='flex items-center'>
        <Image
          src="/images/botanical-garden.jpg"
          width={2400}
          height={80}
          priority
          alt="Image of the botanical garden in Aarhus"
        />
      </div>
      <UserForm />      
      <hr />
      <div className='w-screen grid grid-cols-1 justify-items-center h-[320px] place-items-center'>
        <a className='text-xl underline' target='_blank' href="https://sciencemuseerne.dk/en/botanical-garden/things-to-experience-in-the-botanical-garden">
          THE BOTANICAL GARDEN - AARHUS
        </a>
      </div>
     
    </main>
  );
}
