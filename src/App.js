import "./App.css";
import Header from "./components/Header";
//import Contacts from "./components/Contacts";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";
function App() {
  return (
    <section class="font-jost hyphens-manual p-3 my-auto mx-auto max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-full bg-gray-100 rounded-2xl border-4 sm:p-12 md:p-19 lg:mt-4 md:max-w-letter md:h-letter lg:h-letter">
      <Header />
      <Summary />
      <WorkHistory />
      <Skills />
      <Education />
    </section>
  );
}

export default App;
