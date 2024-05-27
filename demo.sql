-- Create a table for 5 products with product names and prices

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    product_price DECIMAL(10,2) NOT NULL
);

INSERT INTO products (product_id, product_name, product_price) VALUES
(1, 'Product A', 100.00),
(2, 'Product B', 200.00),
(3, 'Product C', 300.00),
(4, 'Product D', 400.00),
(5, 'Product E', 500.00);

-- Path: demo.sql
-- Create a table for 5 customers with customer names and emails

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    customer_email VARCHAR(50) NOT NULL
);

INSERT INTO customers (customer_id, customer_name, customer_email) VALUES
(1, 'Alice', '