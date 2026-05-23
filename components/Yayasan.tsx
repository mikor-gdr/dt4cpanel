import Link from "next/link";
import Image from "next/image";
// import { cn } from "@/lib/lain";
import Datagambar from "@/public/assets/data";

const Yayasan = () => {
  return (
     <div className="absolute inset-0 backdrop-blur-sm animate-fade-in">
 <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black animate-fade-in">

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
<div className="absolute inset-0">
          <Image
            src={Datagambar.Proyek1}
            alt="Background Yayasan Darut Taqwa IV"
            fill
            className="object-cover animate-scale-in"
            sizes="50px"
            priority
            quality={75}
          />
        </div>
      
    <div className="container mx-auto px-4 py-12 md:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
      
    <div className="text-center lg:text-left space-y-6 md:space-y-8 flex flex-col justify-center">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black leading-tight text-white animate-fade-in-up animate-delay-200">
              Yayasan
              <span className="block mt-2 md:mt-3 text-[#009966] drop-shadow-lg animate-fade-in-up animate-delay-300">
                Darut Taqwa IV
              </span>
            </h1>
             <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 animate-fade-in-up animate-delay-400">
              Modopuro Mojokerto
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-500">
              Didirikan tahun 1998 di Desa Modopuro. Mengelola empat lembaga
              pendidikan: Pondok, Madin, TPQ, dan Tahfidz. Membentuk generasi
              yang berakhlak mulia, berilmu, dan bermanfaat bagi umat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 md:pt-4 animate-fade-in-up animate-delay-600">
              <Link
                href="daftar"
                className=
                  "px-6 sm:px-8 py-30 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-2xl"
              >
                Daftar Sekarang
              </Link>
            </div>
            <div className="relative animate-fade-in-right animate-delay-300 flex items-center justify-center">
            {/* <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#009966]/30 hover:border-[#009966] transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,153,102,0.5)] animate-float group"> */}
              {/* Foto Yayasan */}
              <Image
                src={Datagambar.Proyek1}
                alt="Foto Yayasan Darut Taqwa IV Modopuro Mojokerto"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                quality={75}
              />
    </div>
    {/* </div> */}
    </div>
    </div>
    </div>
                </div>
                </div>
    </div>
    
  );
};

export default Yayasan;
