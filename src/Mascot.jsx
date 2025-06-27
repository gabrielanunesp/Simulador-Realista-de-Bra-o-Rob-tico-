export default function Mascot() {
  return (
    <div className="absolute bottom-4 left-4 hidden sm:flex items-end gap-3 z-50">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg animate-bounce">
        <span className="text-3xl">🤖</span>
      </div>

      <div className="bg-gray-800 border border-cyan-500 text-cyan-200 p-4 rounded-xl shadow-xl max-w-xs animate-fade-in">
        <p className="text-sm font-medium leading-snug">
          Olá! Use os <span className="text-cyan-400 font-bold">sliders</span> para girar a base e o braço superior!
        </p>
      </div>
    </div>
  );
}
