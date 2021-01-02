with cte_inventory as (
  select "filmId", "title", count("inventoryId") as "total_inventories"
  from "inventory"
  join "films" using ("filmId")
  group by "filmId"
),

  cte_profit as (
  select "title",
          ("total_inventories" * "rentalDuration" * "rentalRate") as "profit",
          ("total_inventories" * "replacementCost") as "cost"
  from "cte_inventory"
  join "films" using ("title")
  group by "title", "total_inventories", "rentalRate", "rentalDuration", "replacementCost"
)

select "title", "profit", "cost"
from "cte_profit"
where "profit" > "cost"
order by "profit" desc
limit 5;
