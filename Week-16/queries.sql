-- Find the item that has minimum weight.
select * from items order by weight limit 1;

-- Find the different warehouses in “Pune”
select * from warehouses where location = 'pune';

-- Find the details of items ordered by a customer “Mr. Patil”.
select * from customer join orders 
on customer.cno = orders.cno join order_items 
on order_items.order_id = orders.ono where cname = 'Mr.patil';

-- Find a Warehouse which has maximum stores.
select wname, count(store_name) from warehouses join cities 
on cities.city = warehouses.location 
join stores on stores.location_city = cities.city
group by wname; 


-- Find an item which is ordered for a minimum number of times.
select description, order_quantity from items join order_items 
on items.item_no = order_items.items_id 
where order_quantity in (select min(order_quantity) from order_items);

-- Find the detailed orders given by each customer.
select * from customer join orders on orders.cno = customer.cno 
join order_items on orders.ono = order_items.order_id;

