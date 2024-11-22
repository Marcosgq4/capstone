import Button from "./Button";
import MenuItem from "./MenuItem";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="highlights-heading">
        <h1 class="heading">Today's Specials</h1>
        <Button text="Online Menu" route="/#menu" />
      </div>
      <div className="highlights">
        <div className="grid">
          <MenuItem
            item="Greek Salad"
            price="8.99"
            image="assets/icons_assets/greek salad.jpg"
            text="A refreshing blend of crispy lettuce, juicy tomatoes, cucumbers, and red onions, topped with Kalamata olives and creamy feta cheese. Finished with a drizzle of olive oil and a sprinkle of oregano for an authentic Mediterranean touch."
          />
          <MenuItem
            item="Lemon Dessert"
            price="5.99"
            image="assets/icons_assets/lemon dessert.jpg"
            text="A zesty, smooth lemon cream layered over a buttery graham cracker crust, topped with a delicate whipped topping. This dessert is refreshingly tangy, with just the right amount of sweetness to brighten your day."
          />
          <MenuItem
            item="Baklava"
            price="6.99"
            image="assets/icons_assets/baklava.jpg"
            text="Layers of flaky, golden phyllo pastry filled with a rich mixture of crushed nuts, sweetened with honey, and lightly spiced with cinnamon. Each bite is perfectly crunchy, sticky, and irresistibly sweet."
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
