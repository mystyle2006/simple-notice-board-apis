--liquibase formatted sql
--changeset inho:2022043004
--comment post content 추가

alter table post
	add content text null after writer;


