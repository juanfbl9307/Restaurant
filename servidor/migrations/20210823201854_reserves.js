exports.up = function (knex) {
    console.log("realizando migracion de reservas")
    return knex.schema.createTable("reserves", (table) => {
        table.integer("reserve_number");
        table.string("reserve_id").notNullable();
        table.string("reserve_date").notNullable();
        table.string("restaurant_id").notNullable();
        table.string("restaurant_name").notNullable();

        table.foreign('restaurant_id')
            .references('restaurants.restaurant_id');
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable("restaurants")
};
