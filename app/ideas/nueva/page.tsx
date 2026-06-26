import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubirIdea from "@/components/SubirIdea";

const SubirIdeaPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-24">
        <SubirIdea />
      </div>
      <Footer />
    </main>
  );
};

export default SubirIdeaPage;
