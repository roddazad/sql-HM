drop database if exists departments_db;
create database departments_db;

use departments_db;

create table department(
        id int not null auto_increment primary key,
        dept_name varchar(30) not null
    );
    create table roles(
        id int not null auto_increment primary key,
        title varchar(30) not null,
        salary decimal not null,
        department_id int not null,
        foreign key(department_id)
        references department(id)
        on delete cascade
    );
    create table employee(
        id int not null auto_increment primary key,
        first_name varchar(30) not null,
        last_name varchar(30) not null,
        role_id int not null,
        manager_id int,
        foreign key(role_id)
        references roles(id),
        foreign key(manager_id)
        references employee(id)
        on delete set null
    );