--liquibase formatted sql
--changeset inho:2022043001
--comment post 테이블 세팅

create table post
(
	id int auto_increment,
	title varchar(255) not null,
	writer varchar(255) not null,
	password varchar(255) not null,
	created_at timestamp default current_timestamp not null,
	updated_at timestamp default current_timestamp not null,
	deleted_at timestamp default null null,
	deleted tinyint(1) default 0 null,
	constraint post_pk
		primary key (id)
);

