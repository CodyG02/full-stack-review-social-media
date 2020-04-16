create table users(
    users_id serial primary key,
    email varchar(100),
    password varchar(250)
);

create table if not exists post (
    post_id serial primary key,
    users_id int references users(users_id),
    content varchar(250),
    created_at date
);