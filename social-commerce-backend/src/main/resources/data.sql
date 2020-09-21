insert into media_folder(id, location) values (0001, 'images');

insert into media(id, file_name, folder_id) values (1001, 'jeans-dimensions.jpg', 0001);
insert into media(id, file_name, folder_id) values (1002, 'shirt-dimensions.jpg', 0001);
insert into media(id, file_name, folder_id) values (1003, 't-shirt-dimensions.png', 0001);

insert into category(id, code, label, dimensions_image_id) values (2000, 'jeans', 'Jeans', 1001);
insert into category(id, code, label, dimensions_image_id) values (2001, 'shirt', 'Shirt', 1002);
insert into category(id, code, label, dimensions_image_id) values (2002, 't-shirt', 'T-Shirt', 1003);

insert into authentication_client(client_id, secret) values ('social-commerce-web', '123456');

insert into role(role) values('BUYER') ,
                             ('SELLER'),
                             ('ADMIN');

insert into token_type(type) values ('PASSWORD_RESET'),
                                    ('ACCOUNT_CONFIRM');