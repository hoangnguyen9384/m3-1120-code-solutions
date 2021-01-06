select "storeId" as "Stores", count("filmId") as "Total DVDs"
from "inventory"
group by "storeId";
