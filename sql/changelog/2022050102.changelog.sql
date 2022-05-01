--liquibase formatted sql
--changeset inho:2022050102
--comment 유니크 제거

drop index keyword_alarm_writer_uindex on keyword_alarm;
