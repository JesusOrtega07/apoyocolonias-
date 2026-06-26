import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubirResultados from "@/components/SubirResultados";

const SubirResultadosPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24">
        <SubirResultados />
      </div>
      <Footer />
    </main>
  );
};

export default SubirResultadosPage;
