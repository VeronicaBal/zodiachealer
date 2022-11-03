DROP TABLE IF EXISTS products;

CREATE TABLE `products`(
    `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    `stock` INT NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL
);


INSERT INTO products (name, price, stock, image, description) 
    VALUES ( 'Rose quartz', 18.99, 100, 'https://i.etsystatic.com/14286628/r/il/2d7ed9/2184562856/il_fullxfull.2184562856_fa4t.jpg', 'The world-famous rose quartz is often referred to as the heart crystal. Even in early civilisations, people valued it and used it for various rituals and ceremonies. The Romans and Egyptians regarded this crystal as a symbol of beauty, placing it in creams and elixirs. Americans, meanwhile, associated it with well-being and inner growth. As in the present world, rose quartz has been associated with love and pure feelings in the eastern lands.'),
    ('Anthophyllite', 9.99, 50, 'https://upload.wikimedia.org/wikipedia/commons/6/62/Anthophyllite_Su%C3%A8de_Fond.jpg', 'Anthophyllite is known to be a stone of introspection and learning. It inspires you to release your self-imposed restraints. It will also encourage you to make decisions that come from the heart. The energies of Anthophyllite will help you determine which things are important in your life and which priorities you need to reorganize.'),
    ('Agate', 124.99, 60, 'https://www.guardian-angel-reading.com/uploads/2018/06/PA_SEO_338_Agate_Stone.jpg', 'Various Agates can relieve different diseases. This crystal brings inner peace to a person who suffers from anxiety and stress. Moreover, it helps prevent insomnia and ensures pleasant dreams. By carrying the agate necklace longer, earth energy creates connections between joints, bones, and muscles and improves coordination.'),
    ('Amethyst', 19.99, 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Amethyst._Magaliesburg%2C_South_Africa.jpg', "This crystal has properties that can stimulate and soothe the emotions and mind, amplify intelligence, spirituality and happiness. Additionally, it provides success in business matters. Its high frequency purifies the aura of negative energies. It also creates a protective shield of Light around the wearer's body, allowing them to remain clear, focused. Amethyst is a beautiful crystal as a fashion accessory and a powerful spiritual relic to neutralise negativity from life.");