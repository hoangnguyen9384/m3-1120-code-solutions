select "c"."name" as "country", count("ci"."name") as "Number of cities"
from "countries" as "c"
join "cities" as "ci" using ("countryId")
group by "c"."name";
