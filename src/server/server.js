import { createServer, Model, Response } from "miragejs";
import {
  Bookshare1,
  Bookshare2,
  Bookshare3,
  Bookshare4,
  Bookshare5,
  Bookshare6,
  Bookshare7,
  Bookshare8,
  Bookshare9,
  Bookshare10,
  Bookshare11,
  Bookshare12,
  Bookshare13,
  Bookshare14,
  Bookshare15,
  Bookshare16,
  Bookshare17,
  Bookshare18,
  Bookshare19,
  Bookshare20,
  Bookshare21,
  Bookshare22,
  Bookshare23,
  Bookshare24,
} from "../assets";

createServer({
  models: {
    books: Model,
    users: Model,
  },

  seeds(server) {
    server.create("book", {
      id: "20",
      name: "Sleek gold",
      originalPrice: 8000,
      price: 2560,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare20,
      type: "book",
      hostId: "456",
    });
    server.create("book", {
      id: "21",
      name: "Sleek orange",
      originalPrice: 7500,
      price: 2060,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare21,
      type: "novel",
      hostId: "456",
    });
    server.create("book", {
      id: "22",
      name: "time for school",
      originalPrice: 9000,
      price: 1760,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare22,
      type: "novel",
      hostId: "456",
    });
    server.create("book", {
      id: "23",
      name: "New school physics",
      originalPrice: 7080,
      price: 1780,
      description:
        "The Green Goblin is a van free designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare23,
      type: "article",
      hostId: "456",
    });
    server.create("book", {
      id: "24",
      name: "Principles of physics",
      originalPrice: 9200,
      price: 2090,
      description:
        "This free book to get you out of the house  and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer! ",
      imageUrl: Bookshare24,
      type: "book",
      hostId: "456",
    });
    server.create("book", {
      id: "1",
      name: "Lagos Explorer",
      originalPrice: 9300,
      price: 1600,
      description:
        "Lagos State yellow buses, often referred to as 'Danfo' buses, are a distinctive and iconic mode of public transportation in Lagos, Nigeria. These buses are an integral part of the city's transportation system, serving as a primary means of commuting for millions of Lagosians.",
      imageUrl: Bookshare1,
      type: "book",
      hostId: "123",
    });
    server.create("book", {
      id: "2",
      name: "Beach Bum",
      originalPrice: 9650,
      price: 1080,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl: Bookshare2,
      type: "article",
      hostId: "123",
    });
    server.create("book", {
      id: "3",
      name: "Reliable Red",
      originalPrice: 7900,
      price: 1070,
      description:
        "Reliable Red is a van that was made for traveling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl: Bookshare3,
      type: "novel",
      hostId: "456",
    });
    server.create("book", {
      id: "4",
      name: "Dreamfinder",
      originalPrice: 8400,
      price: 1065,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl: Bookshare4,
      type: "book",
      hostId: "789",
    });
    server.create("book", {
      id: "5",
      name: "The Cruiser",
      originalPrice: 8700,
      price: 1120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl: Bookshare5,
      type: "novel",
      hostId: "789",
    });
    server.create("book", {
      id: "6",
      name: "Green Wonder",
      originalPrice: 9300,
      price: 1700,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl: Bookshare6,
      type: "article",
      hostId: "123",
    });

    server.create("book", {
      id: "7",
      name: "Road Buddy",
      originalPrice: 8450,
      price: 1070,
      description:
        "This van elevates your travel experience to new heights. The Red Thunder represents an environmentally conscious vehicle, ideal for individuals seeking a fashionable and eco-friendly means of transportation capable of traversing any terrain.",
      imageUrl: Bookshare7,
      type: "article",
      hostId: "456",
    });
    server.create("book", {
      id: "8",
      name: "Sleek Black",
      originalPrice: 7520,
      price: 1460,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare8,
      type: "novel",
      hostId: "123",
    });

    server.create("book", {
      id: "9",
      name: "Sleek WHite",
      originalPrice: 9200,
      price: 1860,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare9,
      type: "novel",
      hostId: "123",
    });

    server.create("book", {
      id: "10",
      name: "Sleek Black",
      originalPrice: 7700,
      price: 2160,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare10,
      type: "book",
      hostId: "456",
    });
    server.create("book", {
      id: "11",
      name: "Sleek gold",
      originalPrice: 8760,
      price: 3160,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare11,
      type: "book",
      hostId: "456",
    });
    server.create("book", {
      id: "12",
      name: "Sleek orange",
      originalPrice: 7900,
      price: 2160,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare12,
      type: "novel",
      hostId: "456",
    });
    server.create("book", {
      id: "13",
      name: "Sleek brown",
      originalPrice: 7860,
      price: 1600,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare13,
      type: "book",
      hostId: "456",
    });
    server.create("book", {
      id: "14",
      name: "Sleek red",
      originalPrice: 8300,
      price: 1560,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare14,
      type: "novel",
      hostId: "456",
    });
    server.create("book", {
      id: "15",
      name: "Sleek black",
      originalPrice: 10000,
      price: 1660,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare15,
      type: "book",
      hostId: "456",
    });
    server.create("book", {
      id: "16",
      name: "Sleek blue",
      originalPrice: 9700,
      price: 1960,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare16,
      type: "book",
      hostId: "456",
    });
    server.create("book", {
      id: "17",
      name: "Sleek yellow",
      originalPrice: 10000,
      price: 1900,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare17,
      type: "book",
      hostId: "456",
    });
    server.create("book", {
      id: "18",
      name: "Sleek gold",
      originalPrice: 8300,
      price: 2210,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare18,
      type: "book",
      hostId: "456",
    });
    server.create("book", {
      id: "19",
      name: "Sleek green",
      originalPrice: 7770,
      price: 3160,
      description:
        "The Green Goblin is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl: Bookshare19,
      type: "article",
      hostId: "456",
    });

    server.create("user", {
      id: "123",
      email: "c@t.com",
      password: "p123",
      name: "Cat",
    });

    server.create("user", {
      id: "456",
      email: "b@b.com",
      password: "p456",
      name: "Bob",
    });

    server.create("user", {
      id: "789",
      email: "t@m.com",
      password: "p789",
      name: "Tom",
    });
  },

  routes() {
    this.namespace = "api";
    this.passthrough("https://firestore.googleapis.com/**");
    this.passthrough("https://api.emailjs.com/api/v1.0/email/send-form");
    this.logging = false;
    this.timing = 2000;

    this.get("/books", (schema, request) => {
      // return new Response(400, {}, {error: "Error fetching data"})
      return schema.books.all();
    });

    this.get("/books/:id", (schema, request) => {
      const id = request.params.id;
      return schema.books.find(id);
    });

    this.get("/host/books", (schema, request) => {
      // Hard-code the hostId for now
      return schema.books.where({ hostId: "456" });
    });

    this.get("/host/books/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id;
      return schema.books.findBy({ id, hostId: "456" });
    });

    this.post("/books", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const newBookId = new Date().getTime();
      attrs.id = newBookId;
      return schema.books.create(attrs);
    });

    this.post(
      "/login",
      (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);
        const foundUser = schema.users.findBy({ email, password });
        if (!foundUser) {
          return new Response(
            401,
            {},
            { message: "No user with those credentials found!" }
          );
        }

        // At the very least, don't send the password back to the client 😅
        foundUser.password = undefined;
        return {
          user: foundUser,
          token: "Enjoy your pizza, here's your tokens.",
        };
      },
      { timing: 2000 }
    );
  },
});
