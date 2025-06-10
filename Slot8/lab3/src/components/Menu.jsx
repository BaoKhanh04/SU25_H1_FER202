import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MenuCard from './MenuCard';
import hawaiianPizza from '../assets/images/hawaiian_pizza.jpg';
import margheritaPizza from '../assets/images/margheri_pizza.jpg';
import mushroomPizza from '../assets/images/mushroom_pizza.jpg';
import pestoPizza from '../assets/images/pesto_pizza.jpg';

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      originalPrice: '$18.99',
      salePrice: '$15.99',
      description: 'Classic pizza with tomato sauce, mozzarella, fresh basil, salt, and olive oil.',
      image: margheritaPizza,
      badge: 'SALE',
      badgeClass: 'bg-warning text-dark',
    },
    {
      id: 2,
      name: 'Mushroom Pizza',
      originalPrice: '$18.99',
      salePrice: '',
      description: 'Delicious pizza topped with mushrooms, garlic, and herbs on a bed of cheese.',
      image: mushroomPizza,
      badge: null,
      badgeClass: '',
    },
    {
      id: 3,
      name: 'Hawaiian Pizza',
      originalPrice: '$19.99',
      salePrice: '',
      description: 'Sweet and savory pizza topped with ham, pineapple, and cheese.',
      image: hawaiianPizza,
      badge: 'NEW',
      badgeClass: 'bg-warning text-dark',
    },
    {
      id: 4,
      name: 'Pesto Pizza',
      originalPrice: '$22.99',
      salePrice: '$20.99',
      description: 'Gourmet pizza with homemade pesto sauce, mozzarella, and cherry tomatoes.',
      image: pestoPizza,
      badge: 'SALE',
      badgeClass: 'bg-warning text-dark',
    },
  ];

  return (
    <Container className="main-container py-5">
      <h2 className="section-title">Our Menu</h2>
      <Row className="g-4">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
