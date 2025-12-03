import Banner from "./components/Banner";
import FaqSection from "./components/FaqSection";
import OrderForm from "./components/OrderForm";
import OrderingProcess from "./components/OrderingProcess";
import Products from "./components/Products";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <Products />
      <OrderingProcess />
      <FaqSection />
      <OrderForm />
    </main>
  );
}
