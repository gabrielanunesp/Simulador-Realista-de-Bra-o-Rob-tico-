import { useState } from "react";
import RobotArm from "./RobotArm";
import Controls from "./Controls";
import Mascot from "./Mascot";

export default function App() {
  const [rotationBase, setRotationBase] = useState(0);
  const [rotationTop, setRotationTop] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans flex flex-col items-center p-4 sm:p-6 relative overflow-hidden">
      <header className="mb-8 text-center px-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]">
          RobbySim 3000
        </h1>
        <p className="text-cyan-300 mt-2 text-sm sm:text-base">Simulador Realista de Braço Robótico</p>
      </header>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <main className="flex flex-col md:flex-row gap-8">
          <section className="flex-1 bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center">
            <RobotArm rotationBase={rotationBase} rotationTop={rotationTop} />
          </section>

          <section className="flex-1 bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4">
              Controles
            </h2>
            <Controls
              rotationBase={rotationBase}
              setRotationBase={setRotationBase}
              rotationTop={rotationTop}
              setRotationTop={setRotationTop}
            />
          </section>
        </main>
      </div>

      <footer className="mt-10 pt-8 text-center text-cyan-500 text-sm">
        Desenvolvido por Gabriela 💙
      </footer>

      <Mascot />
    </div>
  );
}
