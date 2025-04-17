import Spline from "@splinetool/react-spline";

export function Modelo3DCadena() {
  return (
    <section className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="w-full h-full max-w-none">
        <Spline scene="https://prod.spline.design/nF3V49fMMwfMZvVI/scene.splinecode" />
      </div>
    </section>
  );
}