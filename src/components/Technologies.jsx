import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel, FaBootstrap, FaUnity, FaDocker } from "react-icons/fa";
import { SiMongodb, SiPowerbi } from "react-icons/si";
import { GrArchlinux } from "react-icons/gr";

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-cyan-400 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-red-700 p-4">
                <FaLaravel className="text-7xl text-red-700" />
            </div>
            <div className="rounded-2xl border-4 border-green-600 p-4">
                <SiMongodb className="text-7xl text-green-600" />
            </div>
            <div className="rounded-2xl border-4 border-yellow-400 p-4">
                <SiPowerbi className="text-7xl text-yellow-400" />
            </div>
            <div className="rounded-2xl border-4 border-white p-4">
                <FaUnity className="text-7xl" />
            </div>
            <div className="rounded-2xl border-4 border-blue-700 p-4">
                <FaDocker className="text-7xl text-blue-700" />
            </div>
            <div className="rounded-2xl border-4 border-purple-700 p-4">
                <FaBootstrap className="text-7xl text-purple-700" />
            </div>
            <div className="rounded-2xl border-4 border-cyan-600 p-4">
                <GrArchlinux className="text-7xl text-cyan-600" />
            </div>
        </div>
    </div>
  )
}

export default Technologies