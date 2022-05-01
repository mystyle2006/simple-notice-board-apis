--liquibase formatted sql
--changeset inho:2022043005
--comment post content 추가

alter table comment
	add writer varchar(255) null after post_id;


