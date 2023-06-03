-- Create Database
create database WareHouse;

-- Create Tables
create table cities(city char(20) primary key, state char(20));
create table warehouses(wid int primary key AUTO_INCREMENT, wname char(30), location char(20), extra_context json, foreign key (location) references cities(city));
create table stores(sid int primary key AUTO_INCREMENT, store_name char(20), location_city char(20), foreign key (location_city) references cities(city));
create table customer(cno int primary key AUTO_INCREMENT, cname char(50), addr varchar(50), cu_city char(20), foreign key (cu_city) references cities(city));
create table orders(ono int primary key AUTO_INCREMENT, odate date, cno int, foreign key(cno) references customer(cno)); 
create table items(item_no int primary key AUTO_INCREMENT, description text, weight decimal(5,2), cost decimal(5,2));
create table order_items (
	order_item_no integer primary key AUTO_INCREMENT,
	order_quantity integer,
    order_id integer,
    items_id integer,
    foreign key (order_id) references orders(ono),
    foreign key (items_id) references items(item_no)
);

create table stores_items (
	store_item_id integer primary key AUTO_INCREMENT,
	quantity integer,
	store_id integer,
	item_id integer,
	foreign key (store_id) references stores(sid),
	foreign key (item_id) references items(item_no)
);

-- Insert Data into Table
Insert into cities values('pune', 'maharastra');
Insert into cities values('surat', 'gujarat');
Insert into cities values('ahmedabad', 'gujarat');
Insert into cities values('chennai', 'tamil nadu');
Insert into cities values('gurgaon', 'haryana');

Insert into customer values(1, 'Mr.patil', 'addr1', 'pune');
Insert into customer values(2, 'Mr.patel', 'addr2', 'surat');
Insert into customer values(3, 'Mr.rathi', 'addr3', 'chennai');

Insert into warehouses values(1, 'warehouse1', 'pune', '{"temperature": 25, "humidity": 50}');
Insert into warehouses values(2, 'warehouse2', 'surat', '{"temperature": 15, "humidity": 60}');
Insert into warehouses values(3, 'warehouse3', 'chennai', '{"temperature": 20, "humidity": 70}');
Insert into warehouses values(4, 'warehouse4', 'ahmedabad', '{"temperature": 35, "humidity": 30}');

Insert into stores(store_name, location_city) values('Store X', 'pune');
Insert into stores(store_name, location_city) values('Store Y', 'chennai');
Insert into stores(store_name, location_city) values('Store Z', 'pune');

Insert into items (description, weight, cost) values
('Item 1', 1.5, 10.99),
('Item 2', 2.5, 15.99),
('Item 3', 3.5, 5.99);

Insert into orders (odate, cno) values('2023-05-10', 1);
Insert into orders (odate, cno) values('2023-05-11', 1);
Insert into orders (odate, cno) values('2023-05-12', 2);

Insert into stores_items (quantity, store_id, item_id) values
(100, 1, 1),
(50, 2, 2),
(75, 3, 3);

Insert into order_items (order_quantity, order_id, items_id) values
(10, 1, 1),
(5, 2, 2),
(7, 3, 3);



