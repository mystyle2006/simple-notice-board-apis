--liquibase formatted sql
--changeset inho:2022043002
--comment comment 테이블 세팅

create table comment
(
	id int auto_increment,
	post_id int not null,
	content text null,
	created_at timestamp default current_timestamp not null,
	updated_at timestamp default current_timestamp not null,
	deleted_at timestamp default null null,
	deleted tinyint(1) default 0 null,
	constraint comment_pk
		primary key (id),
	constraint comment_post_fk
		foreign key (post_id) references post (id)
);

