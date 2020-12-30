select "f"."title", "c"."name", "f"."releaseYear"
  from "films" as "f"
  join "filmCategory" as "fc" using ("filmId")
    join "categories" as "c" using ("categoryId")
  where "title" = 'Boogie Amelie';
