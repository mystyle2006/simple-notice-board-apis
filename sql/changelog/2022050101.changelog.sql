--liquibase formatted sql
--changeset inho:2022050101
--comment 키워드 알림 스키마 수정

alter table keyword_alarm
	add created_at timestamp  default CURRENT_TIMESTAMP not null after keywords;

alter table keyword_alarm
	add updated_at timestamp  default CURRENT_TIMESTAMP not null on update current_timestamp after created_at;

alter table keyword_alarm
	add deleted_at timestamp null after updated_at;

alter table keyword_alarm
	add deleted tinyint(1) default 0 null after deleted_at;
