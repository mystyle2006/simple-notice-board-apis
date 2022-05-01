--liquibase formatted sql
--changeset inho:2022043006
--comment 대댓글을 위한 설계 수정

alter table comment
	add parent_id int null after id;

alter table comment
	add constraint comment_comment_id_fk
		foreign key (parent_id) references comment (id);

