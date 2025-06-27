export default function Controls({
  rotationBase,
  setRotationBase,
  rotationTop,
  setRotationTop,
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <label className="block text-cyan-300 mb-2 font-semibold text-sm sm:text-base">
          Rotação da base: {rotationBase}°
        </label>
        <input
          type="range"
          min="0"
          max="360"
          value={rotationBase}
          onChange={(e) => setRotationBase(Number(e.target.value))}
          className="w-full accent-cyan-400"
        />
      </div>

      <div>
        <label className="block text-cyan-300 mb-2 font-semibold text-sm sm:text-base">
          Rotação do braço superior: {rotationTop}°
        </label>
        <input
          type="range"
          min="-90"
          max="90"
          value={rotationTop}
          onChange={(e) => setRotationTop(Number(e.target.value))}
          className="w-full accent-purple-400"
        />
      </div>
    </div>
  );
}
