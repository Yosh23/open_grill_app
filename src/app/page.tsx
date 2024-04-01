import Image from "next/image";

// google fonts
import { Permanent_Marker} from "next/font/google";

const marker = Permanent_Marker({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker',
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative flex place-items-center mb-16">
        <Image
          className="relative"
          src="/logo.svg"
          alt="Open Grill Logo"
          width={650}
          height={650}
          priority
        />
      </div>
      <div className={`${marker.className} flex text-3xl`}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group mx-12 rounded-lg border px-5 py-4 transition-colors hover:border-orange-300 hover:bg-orange-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          HOST A PARTY
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group mx-12 rounded-lg border px-5 py-4 transition-colors hover:border-orange-300 hover:bg-orange-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN A PARTY
        </a>
      </div>
    </main>
  );
}
