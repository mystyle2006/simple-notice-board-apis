--liquibase formatted sql
--changeset inho:2022043003
--comment keyword_alarm 테이블 세팅

create table keyword_alarm
(
	id int auto_increment,
	writer varchar(255) not null,
	keywords text null,
	constraint keyword_alarm_pk
		primary key (id)
);

create unique index keyword_alarm_writer_uindex
	on keyword_alarm (writer);


