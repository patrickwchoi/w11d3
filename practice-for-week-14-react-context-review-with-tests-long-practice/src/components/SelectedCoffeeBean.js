import { CoffeeProvider, useCoffeeTheme } from "../context/CoffeeContext";
// import { useContext } from "react";

const SelectedCoffeeBean = () => {
  const { coffeeBean, setCoffeeBeanId } = useCoffeeTheme();

  return (
    <div className="selected-coffee"> 
      <h2>{coffeeBean.name}</h2>
    </div>
  );
}

export default SelectedCoffeeBean;