
exports.up = function (knex) {
    console.log("realizando migracion de restaurantes")
    return knex.schema.createTable("restaurants", (table) => {
        table.string("restaurant_id").notNullable();
        table.string("restaurant_name").notNullable();
        table.text("restaurant_description");
        table.string("restaurant_address").notNullable();
        table.string("restaurant_city").notNullable();
        table.string("restaurant_img_url");

        table.index("restaurant_id");
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable("restaurants")
};
