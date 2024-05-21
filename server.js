// server.js

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// ~~~~~~~~~~~~~~~~~~~~~~~ apis ~~~~~~~~~~~~~~~~~~~~~~~

// to create an admin
app.post("/admin/credentials", async (req, res) => {
  const { phoneNumber, password } = req.body;
  try {
    const newUser = await prisma.admin.create({
      data: {
        phoneNumber: phoneNumber,
        password: password,
      },
    });
    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to check admins cred
app.post("/admin/login", async (req, res) => {
  const { phoneNumber, password } = req.body;
  try {
    const phoneNumberInt = parseInt(phoneNumber);
    const existingAdmin = await prisma.admin.findUnique({
      where: { phoneNumber: phoneNumberInt },
    });
    if (!existingAdmin) {
      return res.json({ message: "Authentication failed" });
    }
    if (existingAdmin.password !== password) {
      return res.json({ message: "Authentication failed" });
    }
    console.log("Admin logged in successfully");
    res.json({ message: "Admin logged in successfully" });
  } catch (error) {
    console.error("Error authenticating admin:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to create an user #register
app.post("/users", async (req, res) => {
  const { name, phoneNumber, password, address } = req.body;
  try {
    const phoneNumberInt = parseInt(phoneNumber);

    const existingUser = await prisma.user.findUnique({
      where: { phoneNumber: phoneNumberInt },
    });
    if (existingUser) {
      return res
        .status(200)
        .json({ message: "User with this phone number already exists" });
    }
    const newUser = await prisma.user.create({
      data: {
        name,
        phoneNumber: phoneNumberInt,
        password,
        address,
      },
    });
    res.status(200).json({ message: "User created" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to login
app.post("/login", async (req, res) => {
  const { phoneNumber, password } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({
      where: { phoneNumber: parseInt(phoneNumber) },
    });
    if (!existingUser || existingUser.password !== password) {
      return res
        .status(200)
        .json({ message: "Phone number or password is incorrect" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to update name
app.put("/users/:id/name", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to update number
app.put("/users/:id/phoneNumber", async (req, res) => {
  const { id } = req.params;
  const { phoneNumber } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { phoneNumber },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating phone number:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to update password
app.put("/users/:id/password", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { password },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to update address
app.put("/users/:id/address", async (req, res) => {
  const { id } = req.params;
  const { address } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { address },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating address:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to add new products
app.post("/products/add", async (req, res) => {
  const { image, name, description, price, show } = req.body;
  try {
    // No need to process the image if it's just a URL
    // Convert the show string to a boolean value
    const showBoolean = show === "true";

    // Create the product in the database
    const newProduct = await prisma.product.create({
      data: {
        image, // Use the provided image URL directly
        name,
        description,
        price: parseFloat(price),
        show: showBoolean,
      },
    });

    // Send success response
    res.status(200).json({ message: "Product created", product: newProduct });
  } catch (error) {
    // Handle errors
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to get all the products
app.get("/products", async (req, res) => {
  try {
    // Assuming `prisma` is your ORM or database client
    const products = await prisma.product.findMany();
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to update product image url
app.put("/products/update-image/:id", async (req, res) => {
  const { id } = req.params;
  const { image } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { image },
    });
    res
      .status(200)
      .json({ message: "Product image updated", product: updatedProduct });
  } catch (error) {
    console.error("Error updating product image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to update product name
app.put("/products/update-name/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res
      .status(200)
      .json({ message: "Product name updated", product: updatedProduct });
  } catch (error) {
    console.error("Error updating product name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to update product desc
app.put("/products/update-description/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { description },
    });
    res
      .status(200)
      .json({
        message: "Product description updated",
        product: updatedProduct,
      });
  } catch (error) {
    console.error("Error updating product description:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to update product price
app.put("/products/update-price/:id", async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { price: parseFloat(price) },
    });
    res
      .status(200)
      .json({ message: "Product price updated", product: updatedProduct });
  } catch (error) {
    console.error("Error updating product price:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to update show
app.put("/products/update-show/:id", async (req, res) => {
  const { id } = req.params;
  const { show } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { show: show === "true" },
    });
    res
      .status(200)
      .json({
        message: "Product show status updated",
        product: updatedProduct,
      });
  } catch (error) {
    console.error("Error updating product show status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to get users data
app.get("/users/:phoneNumber", async (req, res) => {
  const { phoneNumber } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { phoneNumber: parseInt(phoneNumber) },
      select: { id: true, name: true, address: true },
    });
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// to add in order table
app.post("/orders", async (req, res) => {
  const { productId, userNumber } = req.body;
  try {
    // Create the order in the database
    const newOrder = await prisma.order.create({
      data: {
        productId: parseInt(productId),
        userNumber: parseInt(userNumber),
      },
    });
    res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// to get all teh products
app.get("/products", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get all orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await prisma.order.findMany();
    res.status(200).json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// to get orders from the particular user
app.get("/orders/:userNumber", async (req, res) => {
  const { userNumber } = req.params;
  
  try {
    // Fetch orders for the specified user number
    const orders = await prisma.order.findMany({
      where: {
        userNumber: parseInt(userNumber)
      }
    });

    // Fetch product names for each order
    const ordersWithProductName = await Promise.all(
      orders.map(async (order) => {
        // Fetch the product associated with the order
        const product = await prisma.product.findUnique({
          where: {
            id: order.productId
          }
        });

        return {
          id: order.id,
          productName: product.name, // Retrieve product name
          date: order.date
        };
      })
    );
    
    res.status(200).json({ orders: ordersWithProductName });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
