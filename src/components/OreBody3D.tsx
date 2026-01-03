import pinkDiamond from "@/assets/pink-diamond.jpg";

export function OreBody3D() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] relative flex items-center justify-center">
      <img
        src={pinkDiamond}
        alt="Large natural pink diamond with brilliant cushion cut"
        className="w-full h-full object-contain max-h-[500px]"
      />
      
      {/* Diamond info overlay */}
      <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-4 text-sm">
        <div className="text-white/90 font-display font-semibold mb-2">Pink Diamond</div>
        <div className="space-y-1 text-xs text-white/70">
          <div>Cut: Cushion Brilliant</div>
          <div>Color: Fancy Vivid Pink</div>
          <div>Clarity: VVS1</div>
          <div>Origin: Argyle Mine, Australia</div>
        </div>
      </div>
    </div>
  );
}
