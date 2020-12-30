select "a"."firstName", "a"."lastName", "f"."title" as "film"
from "actors" as "a"
join "castMembers" as "c" using ("actorId")
  join "films" as "f" using ("filmId")
where "f"."title" = 'Jersey Sassy';
